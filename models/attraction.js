const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const attractionSchema = new Schema({
	name: { type: String, required: true },
	genre: String,
	city: { type: String, require: true },
	address: { type: String, required: true },
	url: String,
	description: String,
		
});

const attraction = mongoose.model('attraction', attractionSchema);
module.exports = attraction;
