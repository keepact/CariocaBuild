import Sequelize from 'sequelize';

import Order from '../app/models/Order';
import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [Order, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
