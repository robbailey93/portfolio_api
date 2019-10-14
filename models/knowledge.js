const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const knowledge_schema = new Schema({
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

const Knowledge = mongoose.model('knowledge', knowledge_schema);
model.exports = Knowledge;
