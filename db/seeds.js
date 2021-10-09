//IMPORTS
const mongoose = require('../db/connection');
const attractionSeeds = require('./attractionSeeds.json');
const userSeeds = require('./userSeeds.json');

const Attraction = require('../models/attraction');

//SEED
Attraction.deleteMany({})
	.then(() => {
		Attraction.insertMany(attractionSeeds).then((attraction) => {
			console.log(attraction);
			process.exit();
		});
	})
	.catch((err) => console.error(err)
);

User.deleteMany({})
    .then(() => {
        User.insertMany(userSeeds).then((user) => {
            console.log(user);
            process.exit();
        });
    })
    .catch((err) => console.error(err)
);

/*
//IMPORTS
We're going to NOT IMPORT: mongoose from db/connection


We are gonna connect seeds.js to attraction.js by requiring  attraction.js
we also require seeds.json to grab our data

//RESET
we're going to deleteMany attractions
THEN, we're going to createMany attractions using our ... seedData.json?

no exports needed
*/
