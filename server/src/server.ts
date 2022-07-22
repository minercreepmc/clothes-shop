import http from 'http';
import app from './app';

import { mongoConnect } from 'shares/utils/mongo';
const startServer = async (): Promise<void> => {
  const server = http.createServer(app);

  await mongoConnect();
  const PORT = process.env.PORT || 8000;
  server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
};

startServer();
