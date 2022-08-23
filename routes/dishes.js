const express = require("express");
const router = express.Router();

const { getAllDishes, getDishesByName } = require("../controllers/dishes.js");

router.route("/dishes").get(getAllDishes);
router.route("/dishes/:name").get(getDishesByName);

module.exports = router;
