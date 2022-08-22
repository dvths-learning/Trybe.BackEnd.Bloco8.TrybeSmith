import IUser from '../../interfaces/IUser';
import User from '../../models/entities/User';

export default class UserService {
  private model: User;

  constructor(model: User) {
    this.model = model;
  }

  // public create = async (newUser: IUser): Promise<IUser> => {
  //   const passwordEncrypted = User.encryptPWD(newUser.password);

  //   const result = await this.model.create({
  //     ...newUser,
  //     password: passwordEncrypted,
  //   });
  //   return result;
  // };
  public create = async (newUser: IUser): Promise<IUser> => {
    const user = await this.model.create(newUser);

    return user;
  };
}
