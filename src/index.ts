import app from './app';
import * as dotenv from 'dotenv';

dotenv.config();


const APP_PORT = process.env.APP_PORT;

const server = app.listen(APP_PORT, () => console.log(
  `Server is running on PORT: ${APP_PORT}`,
));

export default server;
