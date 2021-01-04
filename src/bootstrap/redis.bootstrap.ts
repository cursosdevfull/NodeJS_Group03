import IORedis from 'ioredis';
import { DatabaseRepository } from '../interfaces/database.interface';
import yenv from 'yenv';

const env = yenv();

let clientConnection: any;

const getConnection = () => {
	return clientConnection;
};

const clearRedis = async () => {
	const keys = await clientConnection.keys('APP_*');
	const pipeline = clientConnection.pipeline();

	keys.forEach((key: any) => {
		pipeline.del(key);
	});

	return pipeline.exec();
};

const getRedis = async (key: string) => {
	return await clientConnection.get(key);
};

const setRedis = async (key: string, value: any) => {
	await clientConnection.set(key, value);
};

export default class Redis implements DatabaseRepository {
	private client: IORedis.Redis;

	async initialize(): Promise<any> {
		const promise = new Promise((resolve, reject) => {
			this.client = new IORedis({
				host: env.DATABASE.REDIS.HOST,
				port: env.DATABASE.REDIS.PORT,
				/* 				password: 'todovale', */
				retryStrategy(times) {
					const delay = Math.min(times * 100, 2000);
					return delay;
				},
				maxRetriesPerRequest: 5,
			});

			this.client
				.on('connect', () => {
					console.log('Connection Redis successful');
					resolve(true);
				})
				.on('error', error => {
					reject(error);
				});

			clientConnection = this.client;
		});

		await promise;
	}
	disconnect(): void {
		this.client.disconnect();
	}
}

export { getConnection, clearRedis, getRedis, setRedis };
