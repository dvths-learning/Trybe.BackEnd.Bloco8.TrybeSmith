import { Request, Response } from 'express';
import User from '../models/entities/User';
import IPersistenceService from '../useCases/User/IPersistenceService';
import UserUseCase from '../useCases/User/UserUseCaseCreate';

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

  constructor(persitenceService: IPersistenceService<User>) {
    this.persistenceService = persitenceService;
  }

  public createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      await this.persistenceService.create(req.body as User);
      res.status(200).json({ status: 'sem token' });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  };
}
