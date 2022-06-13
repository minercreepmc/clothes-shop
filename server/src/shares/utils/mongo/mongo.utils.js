const mongoose = require('mongoose');

mongoose.connection.on('error', (error) => {
  console.error(error);
});

exports.mongoConnect = async () =>
  mongoose.connect('mongodb://127.0.0.1:27017/clothes-shop-db');

exports.prettierErrors = (errors) =>
  Object.values(errors.errors).map((error) => ({
    name: error.name,
    field: error.path,
    message: error.message,
  }));
