import Server from './bootstrap/server.bootstrap';
import Database from './bootstrap/database.bootstrap';
import Redis from './bootstrap/redis.bootstrap';
import app from './app';

const start = async () => {
	const server = new Server(app);
	const database = new Database();
	const redis = new Redis();

	try {
		await server.initialize();
		await database.initialize();
		await redis.initialize();
	} catch (error) {
		console.log(error);
		database.disconnect();
	}
};

start();
