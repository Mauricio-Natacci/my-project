const Order = require('../models/order.model')

function getOrder(req, res) {
  const order = 'Test'

  res.render('customer/orders/all-orders', order)
}

function addOrder(req, res) {}

module.exports = {
  getOrder: getOrder,
  addOrder: addOrder
}
