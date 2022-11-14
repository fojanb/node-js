const http = require("http");

const server = http.createServer((req, res) => {
// user endpoint 👉 req.url
  console.log(req.url);
  res.write("Welcome to our homepage (http://localhost:8080/)");
  res.end();
});
server.listen(8080, () =>
  console.log("Server listening on http://localhost:8080/ ...")
); //the server object listens on port 8080
