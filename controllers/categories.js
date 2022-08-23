const Category = require("../models/Category.js");

const getAllCategories = async (req, res) => {
	try {
		const categories = await Category.find({});
		res.status(200).json(categories);
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

module.exports = {
	getAllCategories,
};
