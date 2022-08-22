import { NextFunction, Request, Response } from 'express';
import JwtService from '../useCases/User/JwtService';

export default class AuthMiddleware {
  private jwtUtils: JwtService;

  constructor() {
    this.jwtUtils = new JwtService();
  }

  public authenticate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const token = req.headers.authorization;
    
    const user = await this.jwtUtils.authenticateToken(token);
    res.locals.user = user;

    next();
  };
}
