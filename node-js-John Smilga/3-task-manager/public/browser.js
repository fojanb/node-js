let inputName;
document
  .getElementById("createTask")
  .querySelector("input")
  .addEventListener("change", (e) => {
    inputName = e.target.value;
  });
const renderTasksOnScreen = (tasks) => {
  console.log(tasks);
  tasks.forEach((task) => {
    let div = document.createElement("div");
    div.classList.add("task");
    div.innerHTML = `<div>${task.name}</div><div class="tools"><button>Edit</button><button>Delete</button></div>`;
    document.querySelector(".tasks").append(div);
  });
};
// GET request (get ALL tasks)
const getTasksFromMongoDB = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/tasks`);
    const data = await response.json();
    renderTasksOnScreen(data.tasks);
  } catch (error) {
    console.log(error);
  }
};
// POST request (add/create a new task to your to-do list)
const postTaskToMogoDB = async () => {
  try {
    await fetch(`http://localhost:5000/api/v1/tasks`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      //make sure to serialize your JSON body since server only understands strings
      body: JSON.stringify({
        name: inputName,
      }),
    });
    getTasksFromMongoDB();
  } catch (error) {
    console.log(error);
  }
};
window.addEventListener("load", () => {
  getTasksFromMongoDB();
  document
    .getElementById("createTask")
    .addEventListener("submit", postTaskToMogoDB);
});
