const mongoose = require('../db/connection');
const Schema = mongoose.Schema;
// const Attraction = require('./attraction');
// const ReviewSchema = require('./review.js')

const UserSchema = new Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	homeTown: String,
	// reviews: [Review]
    //saved Attractions is an array of Attractions. 
	savedAttractions: Array,
	// friends: [User],
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
/*
we'll import our mongoose connection from connection.js
we'll create Schema as a shorthand for mongoose.Schema.
We'll import our Attraction model
we'll import our Review Schema (it isn't a model!)

Users will have: 
    Username:String (required), 
    password:String (required) ,  
    homeTown: String ( we can create city choices)
    Saved attractions: an array that holds objects adhering to the Attraction model,
    reviews: an array that holds objects adhering to the Review Schema,
    //Security status if possible//


Export our Schema as a mongoose model!
*/
