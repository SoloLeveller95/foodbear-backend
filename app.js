const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
const categories = require("./routes/categories.js");
const restaurants = require("./routes/restaurants.js");

// middleware

app.use(express.json());

// routes

app.use("/api/v1/", [categories, restaurants]);

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
