document.getElementById("createTask").addEventListener("submit", () => {
  let task = document.getElementById("createTask").querySelector("input").value;
  document.getElementById("createTask").action = "/api/v1/tasks";
});
