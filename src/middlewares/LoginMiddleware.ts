import { NextFunction, Request, Response } from 'express';
import Joi, { ObjectSchema } from 'joi';
import IJoiErrors from '../interfaces/IJoiError';
import ValidationError from '../utils/ValidationError';

export default class LoginMiddleware {
  private schema: ObjectSchema;

  constructor() {
    this.schema = Joi.object({
      username: Joi.string().min(3).required(),
      password: Joi.string().min(8).required(),
    });
  }

  public validate = (
    req: Request,
    _res: Response,
    next: NextFunction,
  ): void => {
    const { error } = this.schema.validate(req.body);

    if (error) {
      const joiError = error.details[0] as IJoiErrors;
      throw new ValidationError(joiError);
    }
    next();
  };
}
