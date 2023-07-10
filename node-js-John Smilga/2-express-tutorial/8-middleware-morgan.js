const express = require("express");
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");
const app = express();
const PORT = 5050;
/* multiple middlewares -> put them in the array and they will be executed in the current order
 i.e. First logger and next authorize*/

// middleware -> custome(our own)/express's/third party(need installation)
// * custome(our own) ---> i.e. logger and authorize
// * express's ---> i.e. app.use(express.static('./public'))
// * third party(need installation) ---> i.e. npm install morgan
// module -> custome(our own)/node's/third party(npm packages - need installation)

/* If you use app.use for middlewares, middlewares will be applied to ALL
routes, if you need to add a specific middleware to a specific route, follow the comment
at the bottom
 */
// app.use([logger, authorize]);
app.use(morgan('tiny'))
app.get("/", (req, res) => {
  // console.log(req.user);
  res.send("Home");
  // res.send(`Hello ${req.user.name}`);
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
/* 
only one middleware :
app.get("/api/products",logger, (req, res) => {
  res.send("Products");
});
---------------------
more than a one middleware :
app.get("/api/products",[logger,authorize], (req, res) => {
  res.send("Products");
});
*/
