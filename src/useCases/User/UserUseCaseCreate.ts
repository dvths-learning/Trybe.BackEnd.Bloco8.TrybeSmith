import { IUserCreateRequest } from '../../interfaces/IUser';
import User from '../../models/entities/User';
import UserRepository from '../../models/repository/UserRepository';
import IPersistenceService from './IPersistenceService';

export default class UserUseCase implements IPersistenceService<IUserCreateRequest> {
  private userRepository: UserRepository;

  // injeção da dependência
  // quem for instanciar o serviço terá que informar o contexto do repositorio
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public create = async (user: User): Promise<void> => {
    const passwordEncrypted = User.encryptPWD(user.password);
    const result = await this.userRepository.create({
      ...user,
      password: passwordEncrypted,
    });

    return result;
  };
}
