//IMPORT
const mongoose = require('mongoose');
require('dotenv').config;
//VARIABLES
const mongoURI = process.env.DB_URL;
const db = mongoose.connection();

//CONNECT
mongoose.connect(mongoURI);
//CONSOLE LOGS
db.on('error', (err) =>
	console.log(err.message + ' is MongoDB not running? 🤔')
);
db.on('connected', () => console.log('mongo 🔗 at:', mongoURI,'⚡️'));
db.on('disconnected', () => console.log('disconnected 💔'));
db.on('open', () => console.log('mongo conneciton made 👍'));
//EXPORT
module.exports = mongoose;
/*
we'll IMPORT:

the dotenv configuration property
mongoose

//VARIABLES
we'll set up a shorthand for our mongoDB URI

we'll set up a shorthand for our mongoose.connection

//CONNECT
we'll hook up our api to our database using mongoose.connect, and the mongoURI that we just created

//CONSOLE LOGS
Using the db shorthand that we created, we'll set up console logs for different connection statuses.
// error
//connected
// disconnected
//open the connection

//EXPORT
we'll export our connection as "mongoose";

*/
