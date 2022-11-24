const config = require('../config')
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(config.mongodbUrl);
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