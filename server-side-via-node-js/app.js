/*  
___________________________
app.js is the ROOT module :
    app.js     
  /...|...\
YY   zz   XX
/|\ /|\  /|\
...      ...
___________________________
*/
const http = require("http");
const fs = require("fs");
const url = require("url");
var events = require("events");
const uc = require("upper-case");
/* let adr = 'http://localhost:8080/default.htm?year=2017&month=february';
let x = url.parse(adr, true);
console.log(x);*/
http
  .createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filename = `.${q.pathname}`;
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end(uc.upperCase("Fojan this page is not found"));
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write(req.url); //write a response to the client
    // res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
