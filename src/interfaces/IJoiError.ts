import JoiErrors from '../enums/JoiEnum';
// https://stackoverflow.com/questions/55377365/what-does-keyof-typeof-mean-in-typescript
export default interface IJoiError {
  type: keyof typeof JoiErrors
  message: string
}
