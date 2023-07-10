// express middlewares are functions that executing during request to the server
// each middleware function has access to request and response objects
const express = require("express");
const app = express();
const PORT = 5050;
// req => middleware => res
// logger is a middleware
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log({ method, url, time });
  // Ok, here is a thing, you can either send the response and terminate the job from inside the middleware which
  // means will ignore the res.send insde the app.get("/") and app.get("/about") ORRR you can use
  // next() function to pass the flow to the next middleware
  // [Some sort of functionality inside the middleware ,etc] i.e. res.send("I am middleware");
  // OR :
  next();
};
app.get("/", logger, (req, res) => {
  res.send("Home");
});
app.get("/about", logger, (req, res) => {
  res.send("About");
});
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
