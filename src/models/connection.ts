import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import mysql from 'mysql2/promise';

const env = dotenv.config();
dotenvExpand.expand(env)

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
}); 

export default connection;
