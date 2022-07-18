import http from 'http';
import app from './app';

const { mongoConnect } = require('#shares/utils/mongo/mongo.utils');

const startServer = async () => {
  const server = http.createServer(app);

  await mongoConnect();
  const PORT = process.env.PORT || 8000;
  server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
};

startServer();
