import { IProduct } from '../../interfaces/IProduct';

export default class Product implements IProduct {
  public readonly id: number;

  public name: string;

  public amount: string;

  public orderId: number | null;

  constructor() {
    this.id = 0;
    this.name = '';
    this.amount = '';
    this.orderId = null;
  }
}
