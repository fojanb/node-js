const authorize = (req, res, next) => {
  // We are looking for a specific query string -> user
  const { user } = req.query;
  if (user === "makan") {
    // console.log("You are authorized")
    // Let's make it cool and add a new key-value pair to the req object:
    req.user = { name: "makan", id: 4 };
    next();
  } else {
    res.status(401).send("Unathorized");
  }
};
module.exports = authorize;
