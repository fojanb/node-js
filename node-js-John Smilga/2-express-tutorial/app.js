const { products, people } = require("./data.js");
const express = require("express");
const app = express();
const PORT = 5000;
// HTTP method that all browsers perform by default === "GET"
app.use(express.static("./public"));
// Store the products data onto an api
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find((item) => item.id === Number(productID));
  res.json(singleProduct);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
