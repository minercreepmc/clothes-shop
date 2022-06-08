const mongoose = require('mongoose');

mongoose.connection.on('error', (error) => {
  console.error(error);
});

exports.mongoConnect = async () =>
  mongoose.connect('mongodb://127.0.0.1:27017/clothes-shop-db');
