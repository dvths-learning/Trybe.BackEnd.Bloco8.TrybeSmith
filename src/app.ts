import express from 'express';
import userRoutes from './routes/UserRoutes'; 
import ErrorMiddleware from './middlewares/ErrorMiddleware';

const app = express();

const errorMiddleware = new ErrorMiddleware();

app.use(express.json());
app.use('/users', userRoutes);
app.use(errorMiddleware.handleError);

export default app;
