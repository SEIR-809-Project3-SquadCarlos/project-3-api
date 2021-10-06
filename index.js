//IMPORTS
const express = require('express');
const app =express();
const cors = require('cors');

//SETUP
app.set('port', process.env.PORT || 3050);

//MIDDLEWARE

//json
app.use(express.json());
//urlencoded
app.use()

// enable cors
app.use(cors())

//ROUTES
const attractionsController = require('./controllers/attractions');
app.use('/attractions', attractionsController);

//REDIRECTS
app.get('/', (req, res) => res.redirect('/attractions'));

//LISTEN
app.listen(app.get('port'), () => {
    console.log(`✅ PORT ${app.get('port')}!🌟`);
});
/*
 import express
import cors
create the app variable


setup port to either the env variable or 3050 for development


//////////////////  setup middleware   \\\\\\\\\\\\\\
 includes json
 includes urlencoded
 includes cors

////////////////// setup Routes////////////////////////
/////////////////    set up controllers   \\\\\\\\\\\\\\\\\



///////////////// setup Redirects/////////////////////
*/

///////////////////error handle/////////////////
// using next


/////////////////// Add the Port Listener  \\\\\\\\\\\\\\
//set to port 3050

