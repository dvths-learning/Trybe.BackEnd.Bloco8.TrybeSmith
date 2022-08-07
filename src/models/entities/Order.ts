import { IOrder } from '../../interfaces/IOrder';

export default class Order implements IOrder {
  public readonly id: number;

  public readonly userId: number;

  public productsIds: number[];

  constructor() {
    this.id = 0;
    this.userId = 0;
    this.productsIds = [];
  }
}
