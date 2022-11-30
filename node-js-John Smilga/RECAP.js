const http = require("http");
const server = http.createServer((req, res) => {
  res.write("<h1>hello makan</h1>");
  res.end();
});
server.listen(8000, () => {
  console.log("Listening on port http://localhost:8000");
});
