import * as dotenv from 'dotenv';
import app from './app';

dotenv.config();

const { APP_PORT } = process.env;

const server = app.listen(APP_PORT, () => console.log(
  `Server is running on PORT: ${APP_PORT}`,
));

export default server;
