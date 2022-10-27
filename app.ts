import bodyParser, { urlencoded } from 'body-parser';
import express, { Express } from 'express';

const app: Express = express();
app.use(urlencoded({ extended: true }));
app.use(bodyParser.json());

export { app };