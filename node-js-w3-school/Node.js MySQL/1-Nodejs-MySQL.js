const mySql = require("mysql");

var con = mySql.createConnection({
  host: "localhost",
  user: "root@",
  password: "Amirfozhan@92",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
