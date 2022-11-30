const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("Welcome");
// });

// Using EventEmitter API
const server = http.createServer();
server.on("request", (req, res) => {
  res.end(`Welcome to ${req.url}`);
});
server.listen(5000)
