// Dependencies
const express = require("express");
const bodyParser = require("body-parser"); //JSON responses
const mongoose = require("mongoose"); //Mongo object modelling 


// Port configuration for local/Heroku
const PORT = process.env.PORT || process.argv[2] || 8080;

// Initialize Express
const app = express();

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));
// Controllers
const router = require("./controllers/api.js");
app.use(router);
// Connect to the Mongo DB
const MONGODB_URI = 'mongodb://scraper:scraper1@ds129762.mlab.com:29762/scraper';


// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Start the server
app.listen(PORT, function () {
    console.log(`This application is running on port: ${PORT}`);
});