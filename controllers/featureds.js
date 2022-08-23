const Featured = require("../models/Featured.js");

const getAllFeatureds = async (req, res) => {
	try {
		const Featureds = await Featured.find({});
		res.status(200).json(Featureds);
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

module.exports = {
	getAllFeatureds,
};
