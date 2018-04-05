const MongoClient = require('mongodb').MongoClient;
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

module.exports.insertCustomer = (infoObj) => {

};

module.exports.updateCustomer = (customerId, infoObj) => {

}