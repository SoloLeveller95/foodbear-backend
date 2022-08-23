const mongoose = require("mongoose");

const FeaturedSchema = new mongoose.Schema({
	_id: String,
	name: String,
	short_description: String,
	type: String,
});

module.exports = mongoose.model("Featureds", FeaturedSchema);
