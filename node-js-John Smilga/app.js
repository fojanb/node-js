const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("Welcome");
// });

// Using EventEmitter API
const server = http.createServer();
server.on("request", (req, res) => {
  res.end(`Welcome to the ${req.url}`);
});
server.listen(5000, () => console.log("Listening on port 5000..."));
