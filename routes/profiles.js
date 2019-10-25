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

//  Define Update route
// router.put('/:id', function(req, res) {
// 	User.findById(req.params.id, function(err, user) {
// 		if (!user) res.status(404).send('data is not found');
// 		else {
// 			first_name = req.body.first_name;
// 			last_name = req.body.last_name;
// 			email = req.body.email;
// 			about = req.body.about;

// 			user.save()
// 				.then(user => {
// 					res.json('Update complete');
// 				})
// 				.catch(err => {
// 					res.status(400).send('unable to update the database');
// 				});
// 		}
// 	});
// });

router.put('/:id', function(req, res) {
	User.updateOne(
		{ _id: req.params.id },
		{
			$set: {
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				email: req.body.email,
				about: req.body.about,
			},
		},
		{ multi: true, new: true },
	)
		.then(docs => {
			if (docs) {
				resolve({ success: true, data: docs });
			} else {
				//reject({ success: false, data: 'no such user exist' });
				console.log('failed');
			}
		})
		.catch(err => {
			//reject(err);
		});

	// User.updateOne(
	// 	{ _id: req.params.id },
	// 	{
	// 		first_name: req.body.first_name,
	// 		last_name: req.body.last_name,
	// 		email: req.body.email,
	// 		about: req.body.about,
	// 	},
	// );

	// 	User.update({_id:id},{$set:{name:user.name,state:user.state}},{multi:true,new:true})
	// 	.then((docs)=>{
	// 	  if(docs) {
	// 		resolve({success:true,data:docs});
	// 	  } else {
	// 		reject({success:false,data:"no such user exist"});
	// 	  }
	//    }).catch((err)=>{
	// 	  reject(err);
	//   })

	// function(err, user) {
	// 	if (!user) res.status(404).send('data is not found');
	// 	else {

	// 		user.save()
	// 			.then(user => {
	// 				res.json('Update complete');
	// 			})
	// 			.catch(err => {
	// 				res.status(400).send('unable to update the database');
	// 			});
	// 	}
	// });
});

// Define Delete route
router.delete('/:id', function(req, res) {
	User.findByIdAndRemove({ _id: req.params.id }, function(err, user) {
		if (err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = router;
