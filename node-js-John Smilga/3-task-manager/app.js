const express = require("express");
const app = express();
const PORT = 5000;
const tasksRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
// Middleware:
app.use(express.json());
app.use("/api/v1/tasks", tasksRoute);
// app.get("/api/v1/tasks")        -Get all tasks
// app.get("/api/v1/tasks/:id")    -Get a single task
// app.post("/api/v1/tasks")       -Create task
// app.patch("/api/v1/tasks/:id")  -Update task
// app.delete("/api/v1/tasks/:id") -Delete task
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server is running on the http://localhost:${PORT}`)
    );
  } catch (err) {
    console.log(err);
  }
};
start();
