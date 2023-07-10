const express = require("express");
const logger = require("./logger");
const app = express();
const PORT = 5050;
// req => middleware => res
app.get("/", logger,(req, res) => {
  res.send("Home");
});
app.get("/about", logger,(req, res) => {
  res.send("About");
});
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
