const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const mongoose_string_query = require('mongoose-string-query');
// const timestamps = require('mongoose-timestamp');
// look up timestamps

const user_schema = new Schema({
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
	// only one of these is required --email
	phone: {
		type: Number,
		required: true,
	},
	// only one of these is required --phone

	bio: {
		type: String,
		required: true,
	},
});

// user_schema.plugin(timestamps);

const User = mongoose.model('user', user_schema);
model.exports = User;
