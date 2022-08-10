import Connection from '../Connection';
import { IUserCreateRequest } from '../../interfaces/IUser';

export default class UserRepository {
  public create = async (newUser: IUserCreateRequest): Promise<void> => {
    await Connection.execute(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [newUser.username, newUser.classe, newUser.level, newUser.password],
    );
  };
}
