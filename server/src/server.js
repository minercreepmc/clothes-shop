const http = require('http');

const app = require('./app');

const { mongoConnect } = require('#share/utils/mongodb/mongodb.utils');

const startServer = async () => {
  const server = http.createServer(app);

  await mongoConnect();
  const PORT = process.env.PORT || 8000;
  server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
};

startServer();
