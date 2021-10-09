const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const createUserToken = require('../authenticate/authenticate');

//Let's convert these to async later
//ASYNC 
// router.post('/signin', async (req, res, next) => {
    // try {
    //     const user = await User.findOne({ username: req.body.username});
    // const token = await createUserToken(req, user);
    // res.json(token.token);
    // } catch(err) {
    //     next(err);
    // }
// });

//PROMISE
router.post('/signin', (req, res, next) => {
	User.findOne({ username: req.body.username })
		.then((user) => createUserToken(req, user))
	
		.then((token) => res.json({ token }))
		.catch(next);
});


router.post('/users', async (req, res, next) => {
	try{
       const hashingRequest  =await bcrypt.hash(req.body.password, 4)
    .then((hash) => ({
        // when returning an object with fat arrow syntax, we
			// need to wrap the object in parentheses so JS doesn't
         username:req.body.username,
         password:hash,
         homeTown: null,
         savedAttractions: [null],
        })
        .then((user)=>{User.create(user)}))
      
}catch{
    console.error(next)    
}

});
.then((user) => createUserToken(req, user))

router.delete('/users/:id', requiredToken, async (requiredToken, req, res, next) => {
    try {
            const delUser = await User.findByIdAndDelete(req.params.id);
            res.status(200).json(delUser);
    } catch(err) {
        next(err);
    }
});

module.exports = router;

/*
we'll import our router from express
we'll import our User model
We'll import our Attraction model
we'll import our Reviews Schema


When we POST a user, we will:
    CREATE a new UNIQUE user


When we GET a user, we will:
    FETCH a user's details, so we can match it to a login.

When a user LOGS IN, we will use a POST to:
verify their information matches the associated user's details.

When we PUT a user, we will:
   UPDATE the UNIQUE user's details.

When we DELETE a user, we will:
    Delete the user object, and mark it as deleted for any "friends".

When we UPDATE a user's SAVED ATTRACTIONS List, we will:
   ADD/DELETE/UPDATE the attraction in the user's saved attractions array.

*/
