const dotenv = require('dotenv')

 dotenv.config()

module.exports = {
 mongodbUrl: process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017',
 dbName: 'my-online-shop'
}