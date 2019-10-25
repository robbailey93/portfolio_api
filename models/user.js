const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const mongoose_string_query = require('mongoose-string-query');
// const timestamps = require('mongoose-timestamp');
// look up timestamps

// Define collection and schema for User
let user_schema = new Schema({
	// learn about constructor functions

	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	// only require--email or phone

	about: {
		type: String,
		required: true,
	},
});

// user_schema.plugin(timestamps);
const User = mongoose.model('user', user_schema);
module.exports = User;
// found another syntax
// module.exports = mongoose.model('user', User);
