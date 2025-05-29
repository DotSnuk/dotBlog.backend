import express from 'express';
import config from './config/config.js';

const app = express();

app.use('/', (req, res) => res.status(200).send('HEALTHY'));

app.listen(config.port, () =>
  console.log(`Listening in on port ${config.port}`),
);
