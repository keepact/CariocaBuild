import Sequelize from 'sequelize';

import User from '../app/models/User';
import Client from '../app/models/Client';
import Order from '../app/models/Order';
import Address from '../app/models/Address';

import databaseConfig from '../config/database';

const models = [User, Client, Order, Address];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
