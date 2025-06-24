import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(import.meta.dirname, `../.env.${process.env.NODE_ENV}`),
});

export default {
  port: process.env.PORT,
  dbUrl: process.env.DB_URL,
};
