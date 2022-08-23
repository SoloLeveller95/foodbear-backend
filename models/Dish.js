const mongoose = require("mongoose");

const DishSchema = new mongoose.Schema({
	_id: String,
	_type: String,
	image: String,
	name: String,
	price: Number,
	short_description: String,
});

module.exports = mongoose.model("Dish", DishSchema);
