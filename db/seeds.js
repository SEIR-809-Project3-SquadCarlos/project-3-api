
const mongoose = require('../db/connection');
const attractionSeeds = require('./seedData.json');
const Attraction = require('../models/attraction');

Attraction.deleteMany({})
    .then(()=>{
        Attraction.insertMany(attractionSeeds)
            .then((attraction) => {
                console.log(attraction);
                process.exit();
                });
        })
    .catch((err) => console.error(err));
