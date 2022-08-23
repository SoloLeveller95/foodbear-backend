const Dish = require("../models/Dish.js");

const getAllDishes = async (req, res) => {
	try {
		const dishes = await Dish.find({});
		res.status(200).json(dishes);
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

module.exports = {
	getAllDishes,
};
