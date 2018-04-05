const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'checkout';
let db;

module.exports.connect = () => {
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to MongoDB');
    db = client.db(dbName);
  });
}

module.exports.insertCustomer = (callback) => {
  let document = {};
  let collection = db.collection('customers');
  collection.insert(document, function(err, docsInserted){
    callback(err, document._id);
  });
};

module.exports.updateCustomer = (customerId, infoObj, callback) => {
  let collection = db.collection('customers');
  collection.update({"_id": ObjectId(customerId)},  {$set: infoObj}, (err, info) => {
    callback(err, info);
  })
}