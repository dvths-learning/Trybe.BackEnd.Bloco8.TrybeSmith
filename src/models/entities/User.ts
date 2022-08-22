import * as bcrypt from 'bcrypt';
import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../../interfaces/IUser';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (newUser: IUser): Promise<IUser> => {
    const { username, classe, level, password } = newUser;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );

    const { insertId } = result;

    return { id: insertId, ...newUser };
  };

  public static encryptPWD = (password: string) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  };

  public static checkPWD = (password: string, passwordDB: string) => {
    const isMatch = bcrypt.compare(password, passwordDB);
    if (!isMatch) {
      const e = new Error('Usuário ou senha inválidos');
      e.name = 'UnauthorizedError';
      throw e;
    }
  };
}
