// Performing GET,POST,PUT and DELETE http methods on an array (i.e. people)
const express = require("express");
const app = express();
const { people } = require("./data");
const PORT = 5050;
// GET
app.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
// POST - two flavors
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
