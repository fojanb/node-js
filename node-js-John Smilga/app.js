const http = require("http");
const { readFile, writeFile } = require("fs");

const server = http.createServer((req, res) => {
  // User Endpoint 👉 req.url
  // Common practice for homepage is "/"
  if (req.url === "/") {
    // readFile() is asynchronous so then event-loop will offload it.
    readFile("./content/Home/index.html", "utf8", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.end(result);
      }
    });
    // 👉 result =  ./content/Home/index.html
    return;
  }
  if (req.url === "/about") {
    readFile("./content/About/about.html", "utf8", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.end(result);
      }
    });
    return;
  }
  // Error response as below 👇
  res.end(`<h1>Ooops!</h1>
            <p>http://localhost:8080${req.url} does not exist in our 
            web app</p>
            <a href="/">Back to homepage</a>`);
});
server.listen(8080, () =>
  console.log("Server listening on http://localhost:8080/ ...")
); //The server object listens on port 8080
