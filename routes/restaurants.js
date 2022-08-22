const express = require("express");
const router = express.Router();

const { getAllRestaurants } = require("../controllers/restaurants.js");

router.route("/restaurants").get(getAllRestaurants);

module.exports = router;
