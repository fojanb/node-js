const { products, people } = require("./data.js");
const express = require("express");
const app = express();
const PORT = 5000;
app.use(express.static("./public"));
// HTTP method that all browsers perform by default === "GET"
app.get("/api/people", (req, res) => {
  res.status(200).json({ people: people, products: products });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
