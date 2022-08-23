const Order = require("../models/Order.js");

const getAllOrders = async (req, res) => {
	try {
		const orders = await Order.find({});
		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const createOrders = async (req, res) => {
	try {
		// if (req.body.length === 1) {
		// 	const order = await Order.create(req.body);
		// 	return res.status(201).json(order);
		// } else {
		// 	const orders = await Order.createMany(req.body);
		// }
		// const orders = await Order.create(req.body);
		// res.status(201).json({ orders });
		// console.log(req.body);
		const orders = await Order.create(req.body);
		res.status(201).json({ status: "success", orders });
	} catch (error) {
		console.log(error);
	}
};

// const getRestaurantByFeatured = async (req, res) => {
// 	try {
// 		const { type: typeID } = req.params;
// 		console.log(req.params);
// 		const restaurants = await Restaurant.find({ type: typeID });
// 		if (!restaurants) {
// 			return res
// 				.status(404)
// 				.json({ msg: `No restaurants with id : ${typeID}` });
// 		}
// 		res.status(200).json(restaurants);
// 	} catch (error) {
// 		res.status(500).json({ msg: error });
// 	}
// };

module.exports = {
	getAllOrders,
	createOrders,
};
