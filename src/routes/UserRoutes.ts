import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserRepository from '../models/repository/UserRepository';
import UserUseCase from '../useCases/User/UserUseCaseCreate';
import UserUseCaseValidate from '../useCases/User/UserUseCaseValidate';

const userRoutes = Router();

const userValidate = new UserUseCaseValidate();

const userRepository = new UserRepository();

// User service necessita de um repository injetado
const userService = new UserUseCase(userRepository);

// User controller necessita de um service injetado
const userController = new UserController(userService);

// TODO chamar o middleware de validação do user
userRoutes.post('/', userValidate.validate, userController.createUser);

export default userRoutes;
