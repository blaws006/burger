var express = require("express");
var methodOverride = require('method-override');
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// Static directory to be served
app.use(express.static("app/public"));

app.listen(port, function(){
    console.log("Listening at Port: " + port);
});