const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
	description: String,
	id: String,
	imageUrl: String,
	name: String,
	price: Number,
});

module.exports = mongoose.model("Order", OrderSchema);
