var router = require("./router.js");
// Problem: we need a simple way to look at at user's badge count and JavaScript point from a web browser
// Solution: Use Node.js to perform the profile look ups and serve our templates via HTTP

// Create a web server
var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');
