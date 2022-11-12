const Product = require('../models/product.model')

async function getProducts(req, res, next) {
  try {
    const products = await Product.showProducts()
    res.render('customer/products/all-products', {products})
  } catch(error) {
    next(error)
    return
  }
}

module.exports = {
  getProducts: getProducts
}