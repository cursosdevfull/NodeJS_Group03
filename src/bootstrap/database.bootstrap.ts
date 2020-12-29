import { DatabaseRepository } from '../interfaces/database.interface';
import mongoose from 'mongoose';
import yenv from 'yenv';
import { createConnection } from 'typeorm';

const env = yenv();

let client: any;

export default class Database implements DatabaseRepository {
	async initialize(): Promise<any> {
		const promiseInitialize = new Promise((resolve, reject) => {
			const parametersConnection = {
				type: env.TYPEORM.TYPE,
				host: env.TYPEORM.HOST,
				username: env.TYPEORM.USERNAME,
				password: env.TYPEORM.PASSWORD,
				database: env.TYPEORM.DATABASE,
				port: env.TYPEORM.PORT,
				entities: [env.TYPEORM.ENTITIES],
				synchronize: env.TYPEORM.SYNCHRONIZE,
			};

			createConnection(parametersConnection)
				.then(connection => {
					client = connection;
					resolve(true);
				})
				.catch(error => reject(error));
		});

		await promiseInitialize;
	}

	disconnect(): void {
		try {
			mongoose.disconnect();
		} catch (error) {
			console.log(error);
		}
	}
}
