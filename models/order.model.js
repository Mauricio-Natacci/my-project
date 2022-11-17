const db = require('../data/database')

class Order {
  constructor(cart, userID, status = 'Pending') {
    this.cart = cart
    this.userID = userID
    this.status = status
  }

  save() {
    const orderData = {
      id: this.status,
      status: this.status
    }
    return db.getDb().collection('orders').insertOne(orderData)
  }
}

module.exports = Order
