import { NextFunction, Request, Response } from 'express';
import Joi, { ObjectSchema } from 'joi';
import IJoiError from '../interfaces/IJoiError';
import ValidationError from '../utils/ValidationError';

export default class UserMiddleware {
  private schema: ObjectSchema;

  constructor() {
    this.schema = Joi.object({
      username: Joi.string().min(3).required(),
      classe: Joi.string().min(3).required(),
      level: Joi.number().min(1).required(),
      password: Joi.string().min(8).required(),
    });
  }

  public validate = (req: Request, _res: Response, next: NextFunction): void => {
    const { error } = this.schema.validate(req.body);

    if (error) {
      const joiError = error.details[0] as IJoiError;

      throw new ValidationError(joiError);
    }

    next();
  };
}
