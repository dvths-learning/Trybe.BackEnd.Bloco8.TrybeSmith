import { Request, Response } from 'express';
import OrderUseCase from '../useCases/Order/OrderUseCase';

export default class OrderController {
  private service: OrderUseCase;

  constructor(service: OrderUseCase) {
    this.service = service;
  }

  public getAll = async (_req: Request, res: Response): Promise<void> => {
    const orders = await this.service.getAll();

    res.status(200).json(orders);
  };

  public create = async (req: Request, res: Response): Promise<void> => {
    const order = await this.service.create({ userId: res.locals.user.id, ...req.body });

    const { userId, productsIds } = order;

    res.status(201).json({ userId, productsIds });
  };
}
