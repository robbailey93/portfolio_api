const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const mongoose_string_query = require('mongoose-string-query');
// const timestamps = require('mongoose-timestamp');
// look up timestamps

const skills_schema = new Schema({
	// learn about constructor functions

	skill_name: {
		type: String,
		required: true,
	},
	skill_level: {
		type: String,
		required: true,
	},
});

// user_schema.plugin(timestamps);

const Skills = mongoose.model('skills', skills_schema);
model.exports = Skills;
