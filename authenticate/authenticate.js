//We will import our passport, bcrypt, and jsonwebtoken
//We will import our User model
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const User = require('../../models/User');

//We'll create a secret hashing string for encryption.
const secret = process.env.JWT_SECRET || 'Team-Carlos';

//we will import strategies to configure our authentication
//we will also import the way to extract the json web token
const { Strategy, ExtractJwt } = require('passport-jwt');

//this is setting the minimum requirement  for when we use strategies and secret or key is storing a value in secret so it doesnt get passed to github
const minimumOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
	secretOrKey: secret,
};

//we'll define our strategy as a passport-jwt Strategy, passing in our minimumOptions, and a callback function.
const strategy = new Strategy(minimumOptions, (jwtData, done) => {
	//here the data we extract with minimum options is then being used to find the user  and we use mongoose to find by id to match the id
	User.FindByID(jwtData.id)
		//this sends the user information but the first thing sent from done is an error so we set it to null an send the user as the second argument
		.then((user) => done(null, user))
		.catch((error) => console.error(error));
});

// this makes it so that passport uses the configuration of strategy
passport.use(strategy);

//makes passport initialize an instance of our configuration
passport.initialize();

//we set session to false as we are using an api  that has authentification
const requiredToken = passport.authenticate('jwt', { session :false});
//we'll create a user token by first making sure we have the right credentials, then returning the token that will be required.
const createUserToken=(req,res)=>{
            //if there's no matching user, or the login didn't suplly a pw, OR our bcrypt says the pws don't match, throw an eror.
        if (!user || !req.body.password ||!bcrypt.compareSync(req.body.password,user.password )) {
            const error = new Error('The username or pssword provided are incorrect!!')
            error.statusCode = 422;
            throw error;
        }
    
     return jwt.sign({id:user._id,secret})
}
//we'll export our authentication createUserToken, and our requiredToken!
module.exports = { requiredToken, CreateUSerToken };
