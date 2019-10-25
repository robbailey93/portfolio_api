const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const knowledgebase_schema = new Schema({
	term: {
		type: String,
		required: true,
	},
	definition: {
		type: String,
		required: true,
	},
	tag: {
		type: String,
		required: true,
	},
});

const Knowledgebase = mongoose.model('knowledgebase', knowledgebase_schema);
module.exports = Knowledgebase;
