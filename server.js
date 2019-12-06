
var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();
var db = require("./models");
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Import routes and give the server access to them.
var routes = require("./controller/burgerController.js");
app.use(routes);
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});



// var express = require("express");
// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");
// var exphbs = require("express-handlebars");

// var app = express();
// app.use(express.static(__dirname + "/public"));
// app.use(bodyParser.urlencoded({
//   extended: false
// }))
// app.use(methodOverride("_method"));
// app.engine("handlebars", exphbs({
//   defaultLayout:"main"
// }));
// app.set("view engine", "handlebars");

// var routes = require("./controller/burgerController");
// app.use("/", routes);


// var port = process.env.PORT || 3000;
// app.listen(port);