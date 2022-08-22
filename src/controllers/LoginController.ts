import { Request, Response } from 'express';
import UserUseCaseAuth from '../useCases/User/UserUseCaseAuth';
import JwtUtils from '../useCases/User/JwtService';
import User from '../models/entities/User';

export default class LoginController {
  private service: UserUseCaseAuth;

  private jwtUtils: JwtUtils;

  constructor(service: UserUseCaseAuth) {
    this.service = service;
    this.jwtUtils = new JwtUtils();
  }

  public getLogin = async (req: Request, res: Response): Promise<void> => {
    const user = await this.service.validateCredentials(req.body);

    const { id, username } = user;
    const token = this.jwtUtils.generateToken({ id, username });
  
    res.status(200).json({ token });
  };
}
