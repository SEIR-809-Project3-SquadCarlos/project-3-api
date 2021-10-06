//IMPORTS
const Attraction = require('../models/attraction');

const attractionSeeds = require('./seedData.json');


//SEED
Attraction.deleteMany({})
    .then(()=>{
    Attraction.insertMany(attractionSeeds);
    })
.catch(console.error)
.finally(()=>{
    process.exit();
});


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
