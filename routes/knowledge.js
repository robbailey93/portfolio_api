var express = require('express');
var router = express.Router();
const Knowledge = require('../models/knowledge.js');

router.get('/', function(req, res, next) {
	// should return all users
	Knowledge.find({}, function(err, data) {
		/// have to provide a callback function due to it being async

		if (err) {
			return res.json({
				error: 'errormsg',
				message: 'There is an error in Knowledge',
			});
		}

		res.json(data);
		// look at documentation
	});
});

//TODO: this is a dummy profile for API creation

// const dummyProfile = {
// 	_id: '12',
// 	firstname: 'Rob',
// 	lastname: 'Bailey',
// 	page: 'knowledge-base',
// };

// TODO: Remove dummy response

router.get('/', (req, res) => res.json(dummyProfile));

//router.get('/:id', function(req, res, next) {
//	res.json(dummyProfile);
//});

router.get('/:id', (req, res) => res.json(dummyProfile));

// TODO: Remove dummy response

router.post('/', (req, res) => res.json(dummyProfile));

router.post('/', (req, res) => res.json(dummyProfile));

// TODO: Need to write code to create new profile
// TODO: Remove dummy response

module.exports = router;
