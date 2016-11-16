
var express = require("express");
var app = express();

app.use(express.static("server"));

var myMiddleware1 = function(request, response, next) {
  console.log("I did something, therefore I was");
  next();
};

var myMiddleware2 = function(request, response, next) {
  console.log("middle earth");
  next();
};

var postware = function(request, response, next) {
  console.log("vroooooooom");
  next();
};


app.get("/helloworld", myMiddleware1, myMiddleware2, function(request, response, next) {
  response.send("Hi'y'all's");
  console.log("Hi'y'all's");
  next();
},
postware);

app.get("/bye", function(request, response) {
  response.send("hasta pasta");
});


app.get("*", function(request, response) {
  response.send("star");
});


var port = 4000;
app.listen(port);
