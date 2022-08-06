export interface IUser extends IUserCreateRequest {
  id: number
}

export interface IUserCreateRequest {
  username: string
  classe: string
  level: number
  password: string

}

export interface IUserUpdateRequest {
  username?: string
  class?: string
  level?: number
  password?: string
}
/*
eslint: An interface declaring no members is equivalent to its supertype.
A razão pela qual essa regra existe é que o typescript usa tipagem estrutural,
portanto, definir uma interface vazia não ajuda a diferenciar dois tipos.
Para seguir esse regra eu preciso evitar interfaces vazias
Meu intuito aqui era tornar flexível o uso de propriedades da interface usando 
Partial<> para implementar parcialmente a interface no caso de uma atualização de
dados específicos.
*/
// export interface IUserUpdateRequest extends Partial<IUserCreateRequest> {}
