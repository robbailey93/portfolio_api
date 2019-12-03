var express = require('express');
var router = express.Router();
const Skill = require('../models/skill.js');

// router.get('/', function(req, res, next) {
// 	// should return all users
// 	Skills.find({}, function(err, data) {
// 		/// have to provide a callback function due to it being async

// 		if (err) {
// 			return res.json({
// 				error: 'errormsg',
// 				message: 'There is an error in Skills',
// 			});
// 		}

// 		res.json(data);
// 		// look at documentation
// 	});
// });
////////////
/////
// Define Post or Create route
router.post('/', function(req, res) {
	const newSkill = new Skill(req.body);
	newSkill
		.save()
		.then(skill => {
			res.status(200).json({ skill: 'new skill was added successfully' });
			console.log(newSkill);
		})
		.catch(err => {
			res.status(400).send('unable to save to database');
		});
});

// Define Get or Read route / get all
router.get('/', function(req, res, next) {
	// should return all skills
	Skill.find(function(err, skills) {
		// have to provide a callback function due to it being async
		if (err) {
			console.log(err);
		} else {
			res.json(skills);
		}
	});
});

// Define Get or Read route get by ID for the edit
router.get('/:id', function(req, res) {
	let id = req.params.id;
	Skill.findById(id, function(err, skill) {
		res.json(skill);
	});
});

// Define Put or Update route get by ID
router.put('/:id', function(req, res) {
	Skill.findOneAndUpdate(
		{ _id: req.params.id },
		req.body,
		// an option that asks mongoose to return the updated version
		// of the document instead of the pre-updated one.
		{ new: true },
		(err, skill) => {
			if (err) return res.status(500).send(err);
			return res.status(200).send(skill);
		},
	);
});

// Define Delete route
router.delete('/:id', function(req, res) {
	Skill.findOneAndRemove({ _id: req.params.id }, (err, skill) => {
		if (err) return res.status(500).send(err);
		const response = {
			message: 'Skill successfully deleted',
			id: skill._id,
		};
		return res.status(200).send(response);
	});
});

module.exports = router;
