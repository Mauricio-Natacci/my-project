const express = require('express')
const cartController = require('../controllers/cart.controller')

const router = express.Router()


router.get('/items', cartController.loadCartPage)


module.exports = router
