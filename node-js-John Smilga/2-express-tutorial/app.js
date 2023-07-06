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
  if (!singleProduct) {
    // Handling "undefind product" Redirect to 404 page or other pages
    res.status(404).send("<h2 style='color:red'>Product Does Not Exist</h2>");
  } else {
    res.json(singleProduct);
  }
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let targetProducts = [...products];
  if (search) {
    targetProducts = targetProducts.filter((product) =>
      product.name.startsWith(search)
    );
  }
  if (limit) {
    targetProducts = targetProducts.slice(0, Number(limit));
  }
  // console.log(req.query);
  // console.log("Found this item :",targetProducts);
  if (!targetProducts.length) {
    // Common practice to handling this empty result :
    return res.status(200).json({ success: true, data: [] });
    // OR : res.status(200).json({ error: 200, message: "This Item is not provided" });
    // OR : res.status(200).send("This Item is not provided");
  }
  return res.status(200).json(targetProducts);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
