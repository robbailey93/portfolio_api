const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const mongoose_string_query = require('mongoose-string-query');
// const timestamps = require('mongoose-timestamp');
// look up timestamps

const projects_schema = new Schema({
	// learn about constructor functions

	project_name: {
		type: String,
		required: true,
	},
	project_description: {
		type: String,
		required: true,
	},
	version: {
		type: Number,
		required: false,
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

const Projects = mongoose.model('projects', projects_schema);
model.exports = Projects;
