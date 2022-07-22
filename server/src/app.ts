import 'dotenv/config'
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import apiRouter from './services';

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT,
  })
);
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(morgan('tiny'));

app.use('/api', apiRouter);

export default app;
