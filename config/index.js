const dotenv = require('dotenv')

const {parsed} = dotenv.config()

module.exports = {
 mongodbUrl: parsed.MONGODB_URL || 'mongodb://127.0.0.1:27017',
 dbName: 'my-online-shop'
}