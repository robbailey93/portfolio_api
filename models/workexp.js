const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const mongoose_string_query = require('mongoose-string-query');
// const timestamps = require('mongoose-timestamp');
// look up timestamps

const workexp_schema = new Schema({
	// learn about constructor functions

	job_title: {
		type: String,
		required: true,
	},
	company_name: {
		type: String,
		required: true,
	},
	job_description: {
		type: String,
		required: true,
	},
	start_date: {
		type: Date,
		required: true,
	},
	end_date: {
		type: Date,
		required: false,
	},
});

// user_schema.plugin(timestamps);

const Workexp = mongoose.model('workexp', workexp_schema);
module.exports = Workexp;
