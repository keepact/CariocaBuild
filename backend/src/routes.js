import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import ClientController from './app/controllers/ClientController';
import OrderController from './app/controllers/OrderController';
import AddressController from './app/controllers/AddressController';

import authMidlleware from './app/middleware/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMidlleware);

routes.put('/users', UserController.update);

routes.post('/clients', ClientController.store);
routes.put('/clients:id', ClientController.update);

routes.post('/clients/:client_id/addresses', AddressController.store);

routes.post('/orders', OrderController.store);

export default routes;
