const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

// Define Post or Create route
// router.post('/', (req, res, next) => {
// 	const newUser = new User(req.body);
// 	newUser.save(err => {
// 		if (err) return res.status(500).send(err);
// 		return res.status(200).send(newUser);
// 	});
// });

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

// Define Get or Read route / get by id
// router.get('/:id', function(req, res, next) {
// 	// should return users by id
// 	User.find({ _id: req.params.id }, function(err, users) {
// 		// have to provide a callback function due to it being async
// 		if (err) {
// 			return res.json({
// 				error: 'errormsg',
// 				message: 'There is an error in User/Profile get by id',
// 			});
// 			console.log(err);
// 		}
// 		res.json(users);
// 	});
// });

// Define Edit route
router.get('/:id', function(req, res) {
	let id = req.params.id;
	User.findById(id, function(err, user) {
		res.json(user);
	});
});

router.put('/:id', function(req, res) {
	User.findOneAndUpdate(
		{ _id: req.params.id },
		req.body,
		{ new: true },
		// the callback function
		(err, user) => {
			// Handle any possible database errors
			if (err) return res.status(500).send(err);
			return res.status(200).send(user);
		},
	);
});

// Define Delete route
// router.delete('/:id', function(req, res) {
// 	User.findByIdAndRemove({ _id: req.params.id }, function(err, user) {
// 		if (err) res.json(err);
// 		else res.json('Successfully removed');
// 	});
// });

// Define Delete route
router.delete('/:id', function(req, res) {
	User.findByIdAndDeleteOne(req.params.userId, (err, user) => {
		// Handle any possible database errors
		if (err) return res.status(500).send(err);
		const response = {
			message: 'User successfully deleted',
			//id: User._id,
		};
		return res.status(200).send(response);
	});
});

module.exports = router;
