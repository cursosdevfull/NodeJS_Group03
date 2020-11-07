import Server from "./bootstrap/server.bootstrap";
import app from "./app";

const start = async () => {
  try {
    const server = new Server(app);
    await server.initialize();
  } catch (error) {
    console.log(error);
  }
};

start();
