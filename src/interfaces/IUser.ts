export interface IUser extends IUserCreateRequest {
  id: number
}

export interface IUserCreateRequest {
  username: string
  classe: string
  level: number
  password: string

}
export interface IUserUpdateRequest extends Partial<IUserCreateRequest> {}
