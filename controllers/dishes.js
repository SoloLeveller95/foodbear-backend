const Dish = require("../models/Dish.js");

const getAllDishes = async (req, res) => {
	try {
		const dishes = await Dish.find({}).limit(3);
		res.status(200).json(dishes);
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const getDishesByName = async (req, res) => {
	try {
		const { name: nameID } = req.params;
		console.log(req.params);
		const dishes = await Dish.find({ name: nameID });
		if (!dishes) {
			return res.status(404).json({ msg: `No dishes with name : ${nameID}` });
		}
		res.status(200).json(dishes);
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

module.exports = {
	getAllDishes,
	getDishesByName,
};
