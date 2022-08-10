import JoiErrors from '../enums/JoiErrors';
import IJoiError from '../interfaces/IJoiEnums';

export default class ValidationError extends Error {
  status: number;

  constructor(error: IJoiError) {
    super(error.message);
    this.status = JoiErrors[error.type] || 500;
  }
}
