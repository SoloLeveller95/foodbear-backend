const Restaurant = require("../models/Restaurant.js");

const getAllRestaurants = async (req, res) => {
	try {
		const restaurants = await Restaurant.find({});
		res.status(200).json(restaurants);
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const getRestaurantByFeatured = async (req, res) => {
	try {
		const { type: typeID } = req.params;
		console.log(req.params);
		const restaurants = await Restaurant.find({ type: typeID });
		if (!restaurants) {
			return res
				.status(404)
				.json({ msg: `No restaurants with id : ${typeID}` });
		}
		res.status(200).json(restaurants);
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

module.exports = {
	getAllRestaurants,
	getRestaurantByFeatured,
};
