const express = require("express");
const router = express.Router();

const { getAllCategories } = require("../controllers/categories.js");

router.route("/categories").get(getAllCategories);

module.exports = router;
