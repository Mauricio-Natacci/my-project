const Order = require('../models/order.model')

function getOrder(req, res) {
  res.render('customer/orders/all-orders')
}

function addOrder(req, res) {
  res.render('customer/orders/all-orders')
}

module.exports = {
  getOrder: getOrder,
  addOrder: addOrder
}
