import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import ClientController from './app/controllers/ClientController';
import OrderController from './app/controllers/OrderController';
import AddressController from './app/controllers/AddressController';
import ProductController from './app/controllers/ProductController';
import FileController from './app/controllers/FileController';

import authMidlleware from './app/middleware/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMidlleware);

routes.put('/users', UserController.update);

routes.post('/clients', ClientController.store);
routes.put('/clients:id', ClientController.update);

routes.get('/clients/:client_id/addresses', AddressController.index);
routes.post('/clients/:client_id/addresses', AddressController.store);

routes.post('/clients/:client_id/orders', OrderController.store);
routes.post('/orders/:order_id/products', ProductController.store);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
