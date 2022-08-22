import { Router } from 'express';
import OrderController from '../controllers/OrderController';
import AuthMiddleware from '../middlewares/AuthMiddleware';
import OrderMiddleware from '../middlewares/OrderMiddleware';
import connection from '../models/connection';
import OrderModel from '../models/entities/Order';
import OrderUseCase from '../useCases/Order/OrderUseCase';

const routes = Router();

const orderModel = new OrderModel(connection);
const orderService = new OrderUseCase(orderModel);
const orderController = new OrderController(orderService);

const orderMiddleware = new OrderMiddleware();
const authMiddleware = new AuthMiddleware();

routes.get('/', orderController.getAll);
routes.post('/', authMiddleware.authenticate, orderMiddleware.validate, orderController.create);

export default routes;
