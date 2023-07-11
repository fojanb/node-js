const getTasks = (req, res) => {
  res.send("Get all tasks");
};
const getTask = (req, res) => {
  const { id } = req.params;
  res.send(`Get one task with id : ${id}`);
};
const postTask = (req, res) => {
  res.send(`Task is added.`);
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
