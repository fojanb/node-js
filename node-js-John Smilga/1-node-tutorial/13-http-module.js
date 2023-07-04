const http = require("http");
const { readFile, writeFile } = require("fs");
const PORT = 8080;
const server = http.createServer((req, res) => {
  // req and res both are objects.
  // User's Endpoint 👉 req.url
  // Common practice for homepage is /
  if (req.url === "/") {
    res.end(`Welcome to our homepage (http://localhost:${PORT}/)`);
    return;
  }
  if (req.url === "/about") {
    res.end(`Welcome to our about page (http://localhost:${PORT}/about)`);
    return;
  }
  // Default response as below 👇
  res.end(`<h1>Ooops!</h1>
            <p>http://localhost:${PORT}${req.url} does not exist in our 
            web app</p>
            <a href="/">Back to homepage</a>`);
});
server.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}/ ...`)
); //The server object listens on port 8080
// _________________________________________________________
// 🍄In node.js : Server means HTTP module
// 🍄Creating my own server and setting up the APIs
// 🍄When user types a URL and hits the Enter key : This means a GET request
// 🍄When user fills out a form input and hits submit button : This means a POST request
// 🍄90% of the requests that user sends to the server are GET request.

// Instead of useing if statement go for switch case :
/*
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Home Page...");
      break;
    case "/about":
      res.end("About Page...");
      break;
    default :
    res.end(`<h1 style="color:red;">OOoops! Not such page found</h1>
    <a href="/">Back to home page</a>
    `);
  }
});
*/
