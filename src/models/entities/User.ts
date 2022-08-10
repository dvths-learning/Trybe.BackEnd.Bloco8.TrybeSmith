import * as bcrypt from 'bcrypt';
import { IUserDTO } from '../../interfaces/IUser';

export default class User implements IUserDTO {
  public readonly id: number;

  public username: string;

  public classe: string;

  public level: number;

  public password: string;

  constructor() {
    this.id = 0;
    this.username = '';
    this.classe = '';
    this.level = 0;
    this.password = '';
  }

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
