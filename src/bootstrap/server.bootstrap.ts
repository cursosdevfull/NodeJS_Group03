import http from 'http';
import { AddressInfo } from 'net';
import { Application } from 'express';
import yenv from 'yenv';

const env = yenv();
interface Address extends AddressInfo {
	port: number;
}
export default class Server {
	/*   private app: Application;

  constructor(app: Application) {
    this.app = app;
  } */

	constructor(private app: Application) {}

	async initialize() {
		const promiseServer = new Promise((resolve, reject) => {
			/*       const app = express();

      app.get("/", (request, response) => {
        response.send("Call to method get");
      });

      app.get("/users", (request, response) => {
        response.json([{ user: "user01" }, { user: "user02" }]);
      }); */

			const server: http.Server = http.createServer(this.app);
			server
				.listen(env.PORT)
				.on('listening', () => {
					console.log(
						`Server is running on port:  ${(server.address() as Address).port}`
					);
					resolve();
				})
				.on('error', err => {
					console.log(err);
					reject(err);
				});

			/*       const server = http.createServer((request, response) => {
        response.writeHead(200, { "content-type": "text/plain" });
        response.write("Hola mundo");
        response.end();
      }); */

			/*       server.listen(3000, () => {
        console.log("Server is running");
        resolve("Server is up");
      }); */
		});

		await promiseServer;
	}
}
