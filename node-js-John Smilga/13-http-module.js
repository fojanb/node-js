const http = require("http");
const { readFile, writeFile } = require("fs");

const server = http.createServer((req, res) => {
  // User Endpoint 👉 req.url
  // Common practice for homepage is "/"
  if (req.url === "/") {
    res.end("Welcome to our homepage (http://localhost:8080/)");
    return;
  }
  if (req.url === "/about") {
    res.end("Welcome to our about page (http://localhost:8080/about)");
    return;
  }
  // Default response as below 👇
  res.end(`<h1>Ooops!</h1>
            <p>http://localhost:8080${req.url} does not exist in our 
            web app</p>
            <a href="/">Back to homepage</a>`);
});
server.listen(8080, () =>
  console.log("Server listening on http://localhost:8080/ ...")
); //The server object listens on port 8080
// _________________________________________________________
// 🍄In node.js : Server means HTTP module
// 🍄Creating my own server and setting up the APIs
// 🍄When user types a URL and hits the Enter key : This means a GET request
// 🍄When user fills out a form input and hits submit button : This means a POST request
// 🍄90% of the requests that user sends to the server are GET request.  
