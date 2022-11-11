const Product = require('../models/product.model')

async function getProducts(req, res, next) {
  try {
    const title = await Product.showTitle()
    console.log('testing', title)
    res.render('customer/products/all-products', {title})
  } catch(error) {
    next(error)
    return
  }
}

module.exports = {
  getProducts: getProducts
}