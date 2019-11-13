import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        value: Sequelize.DECIMAL(10, 2),
        date: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Order;
