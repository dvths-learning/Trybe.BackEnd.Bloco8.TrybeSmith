import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import mysql, { Pool } from 'mysql2/promise';

const env = dotenv.config();
dotenvExpand.expand(env);

class Connection {
  private static connection: Pool;

  constructor() {
    Connection.connection = mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  public async execute(sql: string, value: unknown) {
    const result = await Connection.connection.execute(sql, value);
    return result;
  }
}

export default new Connection();
