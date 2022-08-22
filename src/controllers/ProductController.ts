import { Request, Response } from 'express';
import ProductUseCase from '../useCases/ProductUseCase/ProductUseCase';

export default class ProductController {
  private service: ProductUseCase;

  constructor(service: ProductUseCase) {
    this.service = service;
  }

  public getAll = async (_req: Request, res: Response): Promise<void> => {
    const products = await this.service.getAll();

    res.status(200).json(products);
  };

  public create = async (req: Request, res: Response): Promise<void> => {
    const product = await this.service.create(req.body);

    res.status(201).json(product);
  };
}
