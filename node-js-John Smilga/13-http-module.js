const http = require("http");

const server = http.createServer((req, res) => {
  // User Endpoint 👉 req.url
  // Common practice for homepage is "/"
  if (req.url === "/") {
    res.end("Welcome to our homepage (http://localhost:8080/)");
  }
  if (req.url === "/about") {
    res.end("Welcome to our about page (http://localhost:8080/about)");
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
