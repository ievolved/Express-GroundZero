
var http = require('http');


var server = http.createServer(function(request, response) {

  // endpoint, headers, body
  // if request.method == POST
  //   if "/" or "index.html"
  //     ...
  //   if url 2
  //     ...
  //   else
  //     respond 404
  //
  // else if request..method == GET
  //    ...
  // else
  //   respond 405
  //

  if (request.method === "GET") {
    if (request.url === "/helloword") {
      // ...
    }
    else if (request.url === "/goodbyeworld") {

    }
    else {
      // respond 404
    }
  }
  else if (request.method === "POST") {
    if (request.url === "/helloword") {
      // ...
    }
    else if (request.url === "/goodbyeworld") {

    }
    else {
      // respond 404
    }
  }
  else {
    // respond 405/410
  }
  
  // console.log("Headers", request.headers);

  // Body is not so simple
  console.log("Body", request.body);

  response.writeHead(200, {
    'Content-Type': 'text/text'
  });
  // response.end('You requested ' + request.method + ' ' + request.url);
  response.end('cool');

});

console.log("Listening on port 4000...");
server.listen(4000);
