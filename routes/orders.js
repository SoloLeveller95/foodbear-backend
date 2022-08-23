const express = require("express");
const router = express.Router();

const { getAllOrders, createOrders } = require("../controllers/orders.js");

router.route("/orders").get(getAllOrders).post(createOrders);

module.exports = router;
