const Restaurant = require("../models/Restaurant.js");

const getAllRestaurants = async (req, res) => {
	try {
		const restaurants = await Restaurant.find({});
		res.status(200).json({ restaurants: restaurants });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

module.exports = {
	getAllRestaurants,
};
