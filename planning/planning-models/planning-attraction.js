/*
We'll want to import:
our mongoose connection from ../db/connection
express? I still have trouble remembering our api imports


so, we're going to make a new Schema called Attraction
    @Eegi, list the properties and their types!
        the attractions should have:
                name: String
                genre: String
                address: String, required
                website: URL
                description: String
                 reviews(stretch): [String] 
                 ratings(stretch): [Number]
                 city(stretch): String, required (create city choices on client side)
                 tags(stretch): an array that holds Strings (set up tag choices on client side)






    at the bottom, we'll convert the Schema into a mongoose model, and export it.
*/