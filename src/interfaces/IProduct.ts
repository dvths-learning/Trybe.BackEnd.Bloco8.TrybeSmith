export interface IProduct extends IProductRequest {
  id: number
}

export interface IProductRequest {
  name: string
  amount: string
  orderId: number | null
}

export interface IProductUpdade extends Partial<IProductRequest> {}
