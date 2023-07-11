const express = require("express");
const authRouter = express.Router();
authRouter.post("/", (req, res) => {
    let { name } = req.body;
    if (!name) {
      res.status(401).send("Please provide the credentials.");
    } else {
      res.status(200).send(`Welcome ${name}`);
    }
  });
module.exports = authRouter;