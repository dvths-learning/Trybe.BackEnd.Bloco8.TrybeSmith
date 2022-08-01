import { JoiErrors } from '../enums/JoiErrors';
// https://stackoverflow.com/questions/55377365/what-does-keyof-typeof-mean-in-typescript
export interface IJoiError {
  type: keyof typeof JoiErrors
  message: string
}
