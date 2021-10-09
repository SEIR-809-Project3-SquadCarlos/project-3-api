/*
we'll import our mongoose connection from connection.js
we'll create Schema as a shorthand for mongoose.Schema.
We'll import our City model
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
