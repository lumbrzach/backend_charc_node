require('dotenv').config();

const { connectToMongo } = require('../lib/database');

const dbString = process.env.MONGO_CONNECTION_STRING;

connectToMongo(dbString);
