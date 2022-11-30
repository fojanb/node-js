/*
## The Built-in HTTP Module
Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
To include the HTTP module, use the require() method:

var http = require('http');

## Node.js as a Web Server
The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
Use the createServer() method to create an HTTP server:

👉Example
var http = require('http');
//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080


The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.
Save the code above in a file called "demo_http.js", and initiate the file:

Initiate demo_http.js:

C:\Users\Your Name>node demo_http.js
If you have followed the same steps on your computer, you will see the same result as the example: http://localhost:8080

## Add an HTTP Header
If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:

👉Example
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);

























*/