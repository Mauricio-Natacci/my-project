const express = require('express')

const router = express.Router()


router.get('/products', function(req, res) {
  
  res.render('customer/products/all-products', { name: 'Mauricio'})
})

module.exports = router
