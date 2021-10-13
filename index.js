//IMPORTS
const express = require('express');
const app = express();
const cors = require('cors');

//SETUP
app.set('port', process.env.PORT || 3050);

//MIDDLEWARE

//json
app.use(express.json());
//urlencoded
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());

//ROUTES
const attractionsController = require('./controllers/attractions');
app.use('/attractions', attractionsController);

//REDIRECTS
app.get('/', (req, res) => res.redirect('/attractions'));

//LISTEN
app.listen(app.get('port'), () => {
	console.log(`✅ PORT ${app.get('port')}!🌟`);
});
