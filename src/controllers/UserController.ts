import { Request, Response } from 'express';
import User from '../models/entities/User';
import IPersistenceService from '../useCases/User/IPersistenceService';
import JwtService from '../useCases/User/JwtService';

/*
 TODO Add processo de recebimento do token
*/

export default class UserController {
  /*
    Ao invés de puxar diretamente a camada de serviço,
    realizamos a inversão de depencência para que aconteça
    o princípio de Liskov.

    Lembrando que DIP significa que dependeremos de abstrações 
    e não mais de implementações.

    No contexto do código, não queremos depender de um serviço,
    mas da interface de um serviço.
  */
  private persistenceService: IPersistenceService<User>;

  private jwt: JwtService;

  constructor(persitenceService: IPersistenceService<User>) {
    this.persistenceService = persitenceService;
    this.jwt = new JwtService();
  }

  public createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = await this.persistenceService.create(req.body as User);
      const { username, password } = user;
      const token = this.jwt.generateToken({username, password});

      res.status(201).json({ token });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  };
}
