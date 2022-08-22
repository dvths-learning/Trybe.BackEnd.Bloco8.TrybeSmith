import express from 'express';
import 'express-async-errors';
import ErrorMiddleware from './middlewares/ErrorMiddleware';
import loginRoutes from './routes/LoginRoutes';
import usersRoutes from './routes/UserRoutes';
import productsRoutes from './routes/ProductRoutes';
import ordersRoutes from './routes/OrderRoutes';

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

const errorMiddleware = new ErrorMiddleware();
app.use(errorMiddleware.handleError);

export default app;
