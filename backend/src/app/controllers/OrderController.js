import Order from '../models/Order';

class OrderController {
  async store(req, res) {
    const { value, date } = await Order.create(req.body);

    return res.json({
      value,
      date,
    });
  }
}

export default new OrderController();
