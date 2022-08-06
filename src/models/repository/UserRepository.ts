import { IUser } from '../../interfaces/IUser';
import Connection from '../Connection';

export default class UserRepository {
  public static async create(newUser: IUser): Promise<void> {
    await Connection.execute(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [newUser.username, newUser.classe, newUser.level, newUser.password]
    );
  }
}
