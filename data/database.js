const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let mongodbUrl = 'mongodb+srv://mauricio:herokupassword@cluster0.mosjsan.mongodb.net/?retryWrites=true&w=majority'

let database;

async function connectToDatabase() {
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