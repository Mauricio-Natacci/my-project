const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let mongodbUrl = 'mongodb+srv://mauricio:herokupassword@cluster0.ukgd8bk.mongodb.net/?retryWrites=true&w=majority'

if (process.env.MONGODB_URL) {
  mongodbUrl = process.env.MONGODB_URL
}

let database;

async function connectToDatabase() {
  console.log('mongodbUrl:',mongodbUrl)
  console.log('process.env:',process.env)
  const client = await MongoClient.connect(mongodbUrl);
  database = client.db('my-online-shop');
}

function getDb() {
  if (!database) {
    throw new Error('You must connect first!');
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
};