import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/', (request: Request, response: Response) => {
  response.send('Response server');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
