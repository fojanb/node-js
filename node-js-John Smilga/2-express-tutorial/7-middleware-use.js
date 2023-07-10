const express = require("express");
const logger = require("./logger");
const app = express();
const PORT = 5050;
// req => middleware => res
// Always put the middleware before app.get()
// You can add path to middleware app.use('/api',logger);
app.use(logger);
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/items", (req, res) => {
  res.send("Items");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
