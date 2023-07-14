const taskList = require("../taskList");
const generateID = () => {
  return Math.random();
};
const getTasks = (req, res) => {
  res.status(200).json({ success: true, taskList: taskList });
};
const getTask = (req, res) => {
  const { id } = req.params;
  res.send(`Get one task with id : ${id}`);
};
const postTask = (req, res) => {
  if (!req.body.task) {
    res.status(404).json({ success: false, msg: "Please provide a task" });
  } else {
    let newTask = { id: generateID(), task: req.body.task };
    taskList.push(newTask);
    res.status(200).json({ success: true, taskList: taskList });
  }
};
const patchTask = (req, res) => {
  const { id } = req.params;
  res.send(`Edit one task with id : ${id}`);
};
const deleteTask = (req, res) => {
  const { id } = req.params;
  res.send(`Delete one task with id : ${id}`);
};
module.exports = { getTask, getTasks, postTask, patchTask, deleteTask };

/*
👉So far you must have good grasp of why we need Postman or Insomnia tools:
Because GET request is the only default http request on browser, for testing other http method 
we have to code a working application OR using Postman/Insomnia
You can not test a for example POST request URL inside the url field.

👉Also you must already know that why we use a database like MongoDB instead of
storing our data inside a simple array.
*/

/*
🔮REST API Architecture:
GET        /api/tasks     👉 Get all tasks
POST       /api/tasks     👉 Create task
GET        /api/tasks/:id 👉 Get one task
PUT/PATCH  /api/tasks/:id 👉 Update task
DELETE     /api/tasks/:id 👉 Delete task
*/