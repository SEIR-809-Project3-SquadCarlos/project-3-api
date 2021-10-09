//We will import our passport, bcrypt, and jsonwebtoken
//We will import our User model


//We'll create a secret hashing string for encryption.

//we will import strategies to configure our authentication
//we will also import the way to extract the json web token

//this is setting the minimum requirement  for when we use strategies and secret or key is storing a value in secret so it doesnt get passed to github


//we'll define our strategy as a passport-jwt Strategy, passing in our minimumOptions, and a callback function.

	//here the data we extract with minimum options is then being used to find the user  and we use mongoose to find by id to match the id

		//this sends the user information but the first thing sent from done is an error so we set it to null an send the user as the second argument

// this makes it so that passport uses the configuration of strategy

//we'll create a user token by first making sure we have the right credentials, then returning the token that will be required.

//makes passport initialize an instance of our configuration
//we'll export our authentication createUserToken, and our requiredToken!
