var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'My Profile API',
		message: 'This API must be called from the REACT App',
	});
});

module.exports = router;
