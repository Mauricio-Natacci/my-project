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

  
  static transformOrderDocument(orderDoc) {
    return new Order(
      orderDoc.productData,
      orderDoc.userData,
      orderDoc.status,
      orderDoc._id
    );
  }

  static transformOrderDocuments(orderDocs) {
    return orderDocs.map(this.transformOrderDocument);
  }


  static async findAllForUser(userId) {
    const uid = new mongodb.ObjectId(userId);

    const orders = await db
      .getDb()
      .collection('orders')
      .find({ 'userData._id': uid })
      .sort({ _id: -1 })
      .toArray();

    return this.transformOrderDocuments(orders);
  }

  static async findById(orderId) {
    const order = await db
      .getDb()
      .collection('orders')
      .findOne({ _id: new mongodb.ObjectId(orderId) });

    return this.transformOrderDocument(order);
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
