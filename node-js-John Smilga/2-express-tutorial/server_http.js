const http = require("http");
const { readFileSync } = require("fs");
const PORT = 5000;
const homepage = readFileSync("../1-node-tutorial/content/Home/index.html")
const myServer = http.createServer((req, res) => {
  const url = req.url;
  // Homepage
  if (url === "/") {
    // This is response head
    res.writeHead(200, { "content-type": "text/html" });
    // This is response body
    res.write(homepage);
    // Always use res.end() once you send back the response.
    res.end();
  }
  // about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    // This is response body
    res.write("<h1>About page</h1>");
    // Always use res.end() once you send back the response.
    res.end();
    // 404
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    // This is response body
    res.write("<h1>Page not found (404)</h1>");
    // Always use res.end() once you send back the response.
    res.end();
  }
});
myServer.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
/*
* What are the con's for above code ?
1- No meta data (body and header)
2- Routes issue
--------------------------
* Both response and request has header and body
--------------------------
* HTTP status codes :
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)

*/
