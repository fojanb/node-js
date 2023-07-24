const Task = require("../db/models/Task");
// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// Get single task
const getTask = async (req, res) => {
  // Two scenarios of error can occur here:
  // 1- same length id but not exist in our db
  // 2- the entered id has different structure than the actual ids in our db
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      // Custome error handler
      return res.status(404).json({ msg: `Not fount the task with id=${id}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    // Generic Error :
    res.status(500).json({ msg: error });
  }
};
// Create task
const postTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    if (!task) {
      // Custome error handler
      return res.status(404).json({ msg: `Not fount the task with id=${id}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// Delete a task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete({ _id: id });
    if (!task) {
      // Custome error handler
      return res.status(404).json({ msg: `Not fount the task with id=${id}` });
    }
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Update task
const patchTask = async (req, res) => {
  try {
    // req.params is inside th URL
    const { id } = req.params;
    // req.body comes from user's input (i.e form tag in html)
    // const { name, completed } = req.body;
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      // Custome error handler
      return res.status(404).json({ msg: `Not fount the task with id=${id}` });
    }
    const tasks = await Task.find({});
    res.json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
module.exports = { getTask, getTasks, postTask, patchTask, deleteTask };
// const taskList = require("../taskList");
// const generateID = () => {
//   return Math.random();
// };
// const getTasks = (req, res) => {
//   res.status(200).json({ success: true, taskList: taskList });
// };
// const getTask = (req, res) => {
//   const { id } = req.params;
//   res.send(`Get one task with id : ${id}`);
// };
// const postTask = (req, res) => {
//   if (!req.body.task) {
//     res.status(404).json({ success: false, msg: "Please provide a task" });
//   } else {
//     let newTask = { id: generateID(), task: req.body.task };
//     taskList.push(newTask);
//     res.status(200).json({ success: true, taskList: taskList });
//   }
// };
// const patchTask = (req, res) => {
//   const { id } = req.params;
//   res.send(`Edit one task with id : ${id}`);
// };
// const deleteTask = (req, res) => {
//   const { id } = req.params;
//   res.send(`Delete one task with id : ${id}`);
// };
// module.exports = { getTask, getTasks, postTask, patchTask, deleteTask };

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
