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
