import { Request, Response } from 'express';
import UserUseCaseCreate from '../useCases/User/UserUseCaseCreate';
import JwtUtils from '../useCases/User/JwtService';

export default class UserController {
  private service: UserUseCaseCreate;

  private jwtUtils: JwtUtils;

  constructor(service: UserUseCaseCreate) {
    this.service = service;
    this.jwtUtils = new JwtUtils();
  }

  public create = async (req: Request, res: Response): Promise<void> => {
    const user = await this.service.create(req.body);
    const { id, username } = user;

    const token = this.jwtUtils.generateToken({ id, username });

    res.status(201).json({ token });
  };
}
