import { Router } from 'express';
import connection from '../models/connection';
import UserController from '../controllers/UserController';
import UserMiddleware from '../middlewares/UserMiddleware';
import UserModel from '../models/entities/User';
import UserUseCaseCreate from '../useCases/User/UserUseCaseCreate';

const routes = Router();

const userModel = new UserModel(connection);
const userService = new UserUseCaseCreate(userModel);
const userController = new UserController(userService);

const userMiddleware = new UserMiddleware();

routes.post('/', userMiddleware.validate, userController.create);

export default routes;
