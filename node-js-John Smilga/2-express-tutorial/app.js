/* Let's use express router to group theserouters together
and keep our file lean and clean
*/
const express = require("express");
const app = express();
const PORT = 5050;
const peopleRouter = require("./routes/people");
const authRouter = require("./routes/auth");
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/people", peopleRouter);
app.use("/login", authRouter);
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
