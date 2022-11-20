const mongodb = require('mongodb');
const db = require('../data/database')

// Status - > pending, fulfielled & cancelled
class Order {
  constructor(cart, userData, orderId, status = 'Pending') {
    this.productData = cart
    this.userData = userData
    this.id = orderId
    this.status = status
  }

  save() {
    if (this.id) {

    } else {
      const orderData = {
        userData: this.userData,
        productData: this.productData,
        status: this.status
      }
      return db.getDb().collection('orders').insertOne(orderData)
    }
  }
}

module.exports = Order
