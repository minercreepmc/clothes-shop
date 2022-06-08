require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const usersRouter = require('#api/users/users.router');

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello from home');
});
app.use('/users', usersRouter);

module.exports = app;
