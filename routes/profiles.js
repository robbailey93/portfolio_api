const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

// Define Post or Create route
router.post('/', function(req, res) {
	const newUser = new User(req.body);
	newUser
		.save()
		.then(user => {
			res.status(200).json({ user: 'new user was added successfully' });
			console.log(newUser);
		})
		.catch(err => {
			res.status(400).send('unable to save to database');
		});
});

// Define Get or Read route / get all
router.get('/', function(req, res, next) {
	// should return all users
	User.find(function(err, users) {
		// have to provide a callback function due to it being async
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	});
});

// Define Get or Read route get by ID for the edit
router.get('/:id', function(req, res) {
	let id = req.params.id;
	User.findById(id, function(err, user) {
		res.json(user);
	});
});

// Define Put or Update route get by ID
router.put('/:id', function(req, res) {
	User.findOneAndUpdate(
		{ _id: req.params.id },
		req.body,
		// an option that asks mongoose to return the updated version
		// of the document instead of the pre-updated one.
		{ new: true },
		(err, user) => {
			if (err) return res.status(500).send(err);
			return res.status(200).send(user);
		},
	);
});

// Define Delete route
router.delete('/:id', function(req, res) {
	User.findOneAndRemove({ _id: req.params.id }, (err, user) => {
		if (err) return res.status(500).send(err);
		const response = {
			message: 'User successfully deleted',
			id: user._id,
		};
		return res.status(200).send(response);
	});
});

module.exports = router;
