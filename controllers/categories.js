const Category = require("../models/Category.js");

const getAllCategories = async (req, res) => {
	try {
		const categories = await Category.find({});
		res.status(200).json({ categories: categories });
		// res.status(200).json({ tasks, amount: tasks.length });
		// res
		// 	.status(200)
		// 	.json({ status: "success", data: { tasks, nbHits: taks.length } });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

module.exports = {
	getAllCategories,
};
