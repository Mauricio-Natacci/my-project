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
      orderDoc._id,
      orderDoc.status
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

  static async findAll() {
    const orders = await db
      .getDb()
      .collection('orders')
      .find()
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
      const orderId = new mongodb.ObjectId(this.id);
      return db
        .getDb()
        .collection('orders')
        .updateOne({ _id: orderId }, { $set: { status: this.status } });
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
