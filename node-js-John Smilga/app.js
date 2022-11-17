const http = require("http");
const server = http.createServer((req, res) => {
  // User Endpoint 👉 req.url
  // Common practice for homepage is "/"
  if (req.url === "/") {
    res.end("Welcome to our HOMEPAGE (http://localhost:5050/)");
    return;
  }
  if (req.url === "/about") {
    res.end("Welcome to our ABOUT PAGE (http://localhost:5050/about)");
    return;
  }
  // Default response as below 👇
  res.end(`<h1>Ooops!</h1>
            <p>http://localhost:5050${req.url} does not exist in our 
            web app</p>
            <a href="/">Back to HOMEPAGE</a>`);
});
server.listen(5050, () =>
  console.log("Server listening on http://localhost:5050/ ...")
); //The server object listens on port 5050

