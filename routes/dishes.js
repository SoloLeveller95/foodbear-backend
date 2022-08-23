const express = require("express");
const router = express.Router();

const { getAllDishes } = require("../controllers/dishes.js");

router.route("/dishes").get(getAllDishes);

module.exports = router;
