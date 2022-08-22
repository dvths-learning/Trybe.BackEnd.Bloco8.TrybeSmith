import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import ProductMiddleware from '../middlewares/ProductMiddleware';
import connection from '../models/connection';
import ProductModel from '../models/entities/Product';
import ProductUseCase from '../useCases/ProductUseCase/ProductUseCase';

const routes = Router();

const productModel = new ProductModel(connection);
const productService = new ProductUseCase(productModel);
const productController = new ProductController(productService);

const productMiddleware = new ProductMiddleware();

routes.get('/', productController.getAll);
routes.post('/', productMiddleware.validate, productController.create);

export default routes;
