import { IUser } from '../../interfaces/IUser';

export default class User implements IUser {

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
}
