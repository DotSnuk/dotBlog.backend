import express from 'express';
import config from './config/config.js';
import routes from './routes/routes.js';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use('/auth', routes.auth);

app.listen(config.port, () =>
  console.log(`Listening in on port ${config.port}`),
);
