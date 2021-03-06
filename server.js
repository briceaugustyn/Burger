// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");
var path = require('path');
var routes = require("./routing/htmlRoutes.js");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes)


// Add the application routes
//require(path.join(__dirname, './app/routing/apiRoutes'))(app);
// require(path.join(__dirname, './routing/htmlRoutes'))(app);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started  http://localhost:3000
    console.log("Server listening on: http://localhost:" + PORT);
});