const express = require("express");
const {
  getPeople,
  postPeople,
  putPeople,
  deletePeople,
} = require("../controllers/people");
const peopleRouter = express.Router();
// 👉Approach #1 :
// peopleRouter.get("/", getPeople);
// peopleRouter.post("/", postPeople);
// peopleRouter.post("/postman", postPeople);
// peopleRouter.put("/:id", putPeople);
// peopleRouter.delete("/:id", deletePeople);
// OR
// 👉Approach #2 :
peopleRouter.route("/").get(getPeople).post(postPeople);
peopleRouter.route("/postman").post(postPeople);
peopleRouter.route("/:id").put(putPeople).delete(deletePeople);
module.exports = peopleRouter;

// Both Approaches are best practice.