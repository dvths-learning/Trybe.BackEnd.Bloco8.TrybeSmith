// import * as dotenv from 'dotenv';
import { JwtPayload, Secret, sign, SignOptions, verify } from 'jsonwebtoken';
import HttpError from '../../utils/HttpErrors';
import IUser from '../../interfaces/IUser';

// dotenv.config();

export default class JwtService {
  private TOKEN_SECRET: Secret;

  private jwtConfig: SignOptions;

  constructor() {
    // O projeto pede que não se use env para JWT (o que é incorreto)
    this.TOKEN_SECRET = process.env.TOKEN_SECRET || 'secret' as Secret;
    this.jwtConfig = {
      expiresIn: '15m',
      algorithm: 'HS256',
    };
  }

  public generateToken = (user: Pick<IUser, 'username' | 'id'>): string =>
    sign(user, this.TOKEN_SECRET, this.jwtConfig);

  public authenticateToken = async (
    token: string | undefined,
  ): Promise<string | JwtPayload> => {
    if (!token) {
      throw new HttpError(401, 'Token not found');
    }
    try {
      const validate = verify(token, this.TOKEN_SECRET);
      return validate;
    } catch (error) {
      throw new HttpError(401, 'Invalid token');
    }
  };
}
