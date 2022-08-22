const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
	_id: String,
	address: String,
	dishes: [
		{
			id: String,
			image: String,
			name: String,
			price: Number,
			short_description: String,
		},
	],
	image: String,
	lat: Number,
	long: Number,
	name: String,
	rating: Number,
	short_description: String,
	type: String,
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
