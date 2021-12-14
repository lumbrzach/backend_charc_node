const { MongoClient } = require('mongodb');

/**
 * Open a connection to a MongoDB database collection
 * @param {String} connectionString database connection string
 * @returns {<Promise>} promise that resolves to an open connection to
 * MongoDB collection
 */
const connectToMongo = (connectionString) => {
  MongoClient.connect(connectionString)
    .then(() => {
      console.log('connected');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  connectToMongo,
};
