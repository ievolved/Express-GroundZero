
let express = require("express");
let app = express();

app.use(express.static("server"));


let middleware1 = (request, response, next) => {
  console.log("I did something, therefore I was");
  next();
};

let middleware2 = (request, response, next) => {
  console.log("middle earth");
  next();
};

let postware = (request, response, next) => {
  console.log("vroooooooom");
  next();
};


app.get("/helloworld", middleware1, middleware2, (request, response, next) => {
    response.send("Hi'y'all's");
    console.log("Hi'y'all's");
    next();
  },
  postware
);

app.get("/bye", (request, response) => {
  response.send("hasta pasta");
});


app.get("*", (request, response) => {
  response.send("star");
});


let port = 4000;
app.listen(port);

console.log(`listening on http://127.0.0.1:${port}/`);

