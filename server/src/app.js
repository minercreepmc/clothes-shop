require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const apiRouter = require('./services');

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT,
  }),
);
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(morgan('combined'));

app.use('/api', apiRouter);

module.exports = app;
