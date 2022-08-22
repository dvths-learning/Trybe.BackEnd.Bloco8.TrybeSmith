import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import LoginMiddleware from '../middlewares/LoginMiddleware';
import connection from '../models/connection';
import LoginModel from '../models/entities/Login';
import UserUseCaseAuth from '../useCases/User/UserUseCaseAuth';

const routes = Router();

const loginModel = new LoginModel(connection);
const loginService = new UserUseCaseAuth(loginModel);
const loginController = new LoginController(loginService);

const loginMiddleware = new LoginMiddleware();

routes.post('/', loginMiddleware.validate, loginController.getLogin);

export default routes;
