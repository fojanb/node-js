const express = require("express");
const tasksRoute = express.Router();
const {
  getTask,
  getTasks,
  postTask,
  patchTask,
  deleteTask,
} = require("../controllers/tasks");
// tasksRoute.get("/", getTasks);
// tasksRoute.post("/", postTask);
// tasksRoute.get("/:id", getTask);
// tasksRoute.patch("/:id", patchTask);
// tasksRoute.delete("/:id", deleteTask);
tasksRoute.route("/").get(getTasks).post(postTask);
tasksRoute.route("/:id").get(getTask).patch(patchTask).delete(deleteTask);
module.exports = tasksRoute;
