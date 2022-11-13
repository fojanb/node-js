/*  
___________________________
app.js is the ROOT module :
    app.js     
  /...|...\
YY...ZZ...XX
/|\ /|\  /|\
...      ...
___________________________
*/
// Http (node.js module) -> For creating a server
const http = require("http");
// fs (node.js module) -> For CRUD files
const fs = require("fs");
// URL (node.js module) -> For working with paths
const url = require("url");
// events (node.js module) -> For raising an event
const events = require("events");
// uc (NPM package)
const uc = require("upper-case");
// Formidable (NPM package)-> For uploading a file
const formidable = require("formidable");
// Nodemailer (NPM package) -> For sending an e-mail
const nodemailer = require("nodemailer");
// mysql (NPM package)
const mysql = require('mysql');
// Setup a server on port 8080 :
const server = http.createServer((req, res) => {
  const con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "psst"
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  if (req.url === "/api/upload" && req.method.toLowerCase() === "post") {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      res.end(JSON.stringify({ fields, files }, null, 2));
    });
  } else {
    // show a file upload form
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
    <h2>With Node.js <code>"http"</code> module</h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="multipleFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
  }
});
server.listen(8080, () =>
  console.log("Server listening on http://localhost:8080/ ...")
); //the server object listens on port 8080
