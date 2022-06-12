require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const apiRouter = require('./api');

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.use('/api', apiRouter);

module.exports = app;
