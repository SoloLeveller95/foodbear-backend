const express = require("express");
const router = express.Router();

const {
	getAllRestaurants,
	getRestaurantByFeatured,
} = require("../controllers/restaurants.js");

router.route("/restaurants").get(getAllRestaurants);
router.route("/restaurants/:type").get(getRestaurantByFeatured);

module.exports = router;
