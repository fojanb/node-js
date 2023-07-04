const express = require("express");
const app = express();
const path = require("path");
const PORT = 5000;
// Setup static and middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
// res.sendFile(path.resolve(__dirname,"./navbar-app/index.html"));
// SSR (Server Side Rendering)
// Adding to express.static()
// });

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found :(</h1>");
});
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);

// app.get("/", (req, res) => {
//   res.status(200).send("Homepage");
//   res.end();
// });
// app.get("/about", (req, res) => {
//   res.status(200).send("About page");
//   res.end();
// });
// app.all("*",(req,res) => {
//     res.status(404).send("<h1>Resource not found :(</h1>")
// })
// app.listen(PORT, () =>
//   console.log(`Server is running on http://localhost:${PORT}`)
// );
