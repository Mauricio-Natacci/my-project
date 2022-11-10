const Product = require('../models/product.model')

async function getProducts(req, res, next) {
  try {
    const title = await Product.showTitle()
    console.log('testing', title)
    res.render('admin/products/all-products', {title})
  } catch(error) {
    next(error)
    return
  }
}

function getNewProduct(req, res) {
  res.render('admin/products/new-product')
}

async function createNewProduct(req, res, next) {
  const product = new Product({
    ...req.body,
    image: req.file.filename
  })

  try {
    await product.save()
  } catch(error) {
    next(error)
    return
  }
  res.redirect('products')
}


module.exports = {
  getProducts: getProducts,
  getNewProduct: getNewProduct,
  createNewProduct: createNewProduct
}