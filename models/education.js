const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const mongoose_string_query = require('mongoose-string-query');
// const timestamps = require('mongoose-timestamp');
// look up timestamps

const education_schema = new Schema({
	// learn about constructor functions

	school: {
		type: String,
		required: true,
	},
	course_of_study: {
		type: String,
		required: true,
	},
	is_complete: {
		type: Boolean,
		required: true,
	},
	additional_info: {
		type: String,
		required: false,
	},
});

// user_schema.plugin(timestamps);

const Education = mongoose.model('education', education_schema);
module.exports = Education;
