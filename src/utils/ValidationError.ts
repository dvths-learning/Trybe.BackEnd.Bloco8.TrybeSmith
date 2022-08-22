import JoiErrors from '../enums/JoiEnum';
import IJoiError from '../interfaces/IJoiError';

export default class ValidationError extends Error {
  status: number;

  constructor(error: IJoiError) {
    super(error.message);
    this.status = JoiErrors[error.type] || 500;
  }
}
