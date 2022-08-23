const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
const categories = require("./routes/categories.js");
const restaurants = require("./routes/restaurants.js");
const featureds = require("./routes/featureds.js");
const dishes = require("./routes/dishes.js");
var cors = require("cors");

// middleware

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

// routes

app.use("/api/v1/", [categories, restaurants, featureds, dishes]);

const port = process.env.PORT || 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () =>
			console.log(`Server is listening on port ${port}...`)
		);
	} catch (error) {
		console.log(error);
	}
};

start();
