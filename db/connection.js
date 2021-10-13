//IMPORT
require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.DB_URL;
const db = mongoose.connection;

//CONNECTION
mongoose.connect(mongoURI);

//EXPORT
module.exports = mongoose;
