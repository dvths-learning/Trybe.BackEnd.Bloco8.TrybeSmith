export interface IOrder extends IOrderCreateRequest {
  id: number
}

export interface IOrderCreateRequest {
  userId: number
  productsIds: number[]
}

export interface IOrderUpdateRequest extends Partial<IOrderCreateRequest> {}




