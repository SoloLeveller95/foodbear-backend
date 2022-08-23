const express = require("express");
const router = express.Router();

const { getAllFeatureds } = require("../controllers/featureds.js");

router.route("/featureds").get(getAllFeatureds);

module.exports = router;
