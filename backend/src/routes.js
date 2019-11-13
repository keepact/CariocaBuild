import { Router } from 'express';

import OrderController from './app/controllers/OrderController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMidlleware from './app/middleware/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMidlleware);

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

routes.post('/orders', OrderController.store);

export default routes;
