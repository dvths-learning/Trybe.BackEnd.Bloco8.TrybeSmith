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

  // Tornar stetic para evitar erro de lint pedindo this
  public static async execute(sql: string, value: unknown) {
    const result = await Connection.connection.execute(sql, value);
    return result;
  }
}
// Referencia o construtor, ou seja, automáticamente cria uma instância deconcxão
// Isso também a delimita, obedecendo o princípio Open-Closed. 
// Ela está  aberta para extensão, no entanto, fechada para modificações
export default new Connection();
