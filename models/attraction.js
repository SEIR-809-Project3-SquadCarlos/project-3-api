const mongoose = require('../db/connection');
const Schema = mongoose.Schema 

const attractionSchema = new Schema (
    {
        name: {type:String, required: true}, 
        genre: String, 
        city:{type:String,require:true},
        address: {type:String, required: true}, 
        url: String,
        description: String,
        // reviews(stretch): [Schema] 
        // ratings(stretch): [Number] 

    }
)
/*
We'll want to import:

our mongoose connection from ../db/connection
express? I still have trouble remembering our api imports


so, we're going to make a new Schema called Attraction
    @Eegi, list the properties and their types!
        the attractions should have:
                name: String, required
                genre: String //// tags: [String] /// a dropdown or menu for genre/tag options?
                address: String, required
                url: String
                description: String
                reviews(stretch): [Schema] 
                ratings(stretch): [Number] // store them here, and manipulate them in the front end.


    at the bottom, we'll convert the Schema into a mongoose model, and export it.
*/
const attraction = mongoose.model("attraction", attractionSchema)
module.exports = attraction