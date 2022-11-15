const cartController = require('./cart.controller')
const Product = require('../models/product.model')


async function loadCartPage(req, res) {

  // const product = await Product.findById(req.body.id)
  // console.log(product)
  let name = 'Mauricio'
  res.render('customer/cart/items', {name})
}

module.exports = {
  loadCartPage: loadCartPage
}