import ILogin from '../../interfaces/ILogin';
import IUser from '../../interfaces/IUser';
import Login from '../../models/entities/Login';
import HttpError from '../../utils/HttpErrors';
// import User from '../../models/entities/User';

export default class LoginService {
  private model: Login;

  constructor(model: Login) {
    this.model = model;
  }

  // TODO usar bcrypt para desencriptar a senha
  public validateCredentials = async (credentials: ILogin): Promise<IUser> => {
    const user = await this.model.getCredentials(credentials);
    
    if (user.length === 0) throw new HttpError(401, 'Username or password invalid');

    return user[0];
  };
}
