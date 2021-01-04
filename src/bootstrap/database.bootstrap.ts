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
				type: env.DATABASE.TYPEORM.TYPE,
				host: env.DATABASE.TYPEORM.HOST,
				username: env.DATABASE.TYPEORM.USERNAME,
				password: env.DATABASE.TYPEORM.PASSWORD,
				database: env.DATABASE.TYPEORM.DATABASE,
				port: env.DATABASE.TYPEORM.PORT,
				entities: [env.DATABASE.TYPEORM.ENTITIES],
				synchronize: env.DATABASE.TYPEORM.SYNCHRONIZE,
			};

			createConnection(parametersConnection)
				.then(connection => {
					console.log('Connected');
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
