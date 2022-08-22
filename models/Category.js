const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
	_id: String,
	image: String,
	name: String,
});

module.exports = mongoose.model("Category", CategorySchema);
