import IProduct from '../../interfaces/IProduct';
import ProductModel from '../../models/entities/Product';

export default class ProductService {
  private model: ProductModel;

  constructor(model: ProductModel) {
    this.model = model;
  }

  public getAll = async (): Promise<IProduct[]> => {
    const products = await this.model.getAll();

    return products;
  };

  public create = async (newProduct: IProduct): Promise<IProduct> => {
    const product = await this.model.create(newProduct);

    return product;
  };
}
