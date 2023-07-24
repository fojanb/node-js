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
    div.innerHTML = `<div>${task.name}</div><div class="tools"><button>Edit</button><button id='${task._id}'>Delete</button></div>`;
    document.querySelector(".tasks").append(div);
    document.getElementById(`${task._id}`).addEventListener("click", (e) => {
      e.target.parentNode.parentNode.remove();
      deleteTaskFromMongoDB(e.target.id);
    });
  });
};
// GET request (get ALL tasks)
const getTasksFromMongoDB = async () => {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/tasks`, {
      method: "get",
    });
    const data = await response.json();
    if (!data.tasks.length) {
      const emptyList = document.createElement("div");
      emptyList.innerHTML = `<h3 style="color:#3f7294;">No available tasks</h3>`;
      document.querySelector(".tasks").append(emptyList);
    } else {
      renderTasksOnScreen(data.tasks);
    }
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
// Delete request
const deleteTaskFromMongoDB = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/tasks/${id}`, {
      method: "delete",
    });
    
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
