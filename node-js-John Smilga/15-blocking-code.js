const http = require("http");
const { readFile, writeFile } = require("fs");
const { result } = require("lodash");

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
    // 👉 result = ./content/Home/index.html
    return;
  }
  if (req.url === "/about") {
    // Some blocking code : for loop is blocking (syncronous) task
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i}-${j}`);
      }
    }
    readFile("./content/About/about.html", "utf8", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.end(result);
      }
    });
    return;
  }
  if (req.url === "/contact") {
    readFile("./content/Contact/contact.html", "utf8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.end(result);
    });
    return;
  }
  if (req.url === "/services") {
    readFile("./content/Services/services.html", "utf8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      res.end(result);
    });
    return;
  }
  // Error response to the invalid url as below 👇
  res.end(`<h1>Ooops!</h1>
            <p>http://localhost:8080${req.url} does not exist in our 
            web app</p>
            <a href="/">Back to homepage</a>`);
});
server.listen(8080, () =>
  console.log("Server listening on http://localhost:8080/ ...")
); //The server object listens on port 8080
