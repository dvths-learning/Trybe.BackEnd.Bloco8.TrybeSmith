import { Router } from 'express';
import UserController from '../controllers/UserController';
import UserRepository from '../models/repository/UserRepository';
import UserUseCase from '../useCases/User/UserUseCaseCreate';
import UserUseCaseValidate from '../useCases/User/UserUseCaseValidate';

const userRoutes = Router();

const userValidate = new UserUseCaseValidate();

const userRepository = new UserRepository();

const userService = new UserUseCase(userRepository);

const userController = new UserController(userService);

userRoutes.post('/', userValidate.validate, userController.createUser);

export default userRoutes;
