const express = require('express');
const Attraction = require('../models/attraction');
const router = express.Router();

//////////////////// Create the http methods \\\\\\\\\\\\\\\\\\\\\
router.get('/', async (req, res, next) => {
	try {
		const attractions = await Attraction.find(req.params);
		res.json(attractions);
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const attraction = await Attraction.findById(req.params.id);
		res.json(attraction);
	} catch (err) {
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const newAttraction = await Attraction.create(req.body);
		res.json(newAttraction);
	} catch (err) {
		next(err);
	}
});

router.put('/:id', (req, res, next) => {
	try {
		const update = await Attraction.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(201).json(update);
	} catch (err) {
		next(err);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const delAttraction = await Attraction.findByIdAndDelete(req.params.id);
		res.status(204).json(delAttraction);
	} catch (err) {
		next(err);
	}
});


/*
///////////////////     require express   \\\\\\\\\\\\\\\\\\\\
-create Express Router 
-require the arraction model


//////////////////// Show routes:///////////////////////////


///////////////////     Create   \\\\\\\\\\\\\\\\\\\\\\

///////////////////     Update  \\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////     Delete  \\\\\\\\\\\\\\\\\\\\\\\\\\\

////////////////////     export module        \\\\\\\\\\\\\\\\\\\\\
*/
module.exports =router