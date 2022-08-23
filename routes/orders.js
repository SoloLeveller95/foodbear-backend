const express = require("express");
const router = express.Router();

const {
	getAllOrders,
	createOrders,
	deleteOrders,
} = require("../controllers/orders.js");

router.route("/orders").get(getAllOrders).post(createOrders);
router.route("/orders/:_id").delete(deleteOrders);

module.exports = router;
