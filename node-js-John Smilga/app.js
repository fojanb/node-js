const http = require("http");
const server = http.createServer((req, res) => {
  res.end(`Welcome to ${req.url}`);
});

// Using EventEmitter API
// const server = http.createServer();
// server.on("request", (req, res) => {
//   res.end(`Welcome to the ${req.url}`);
// });
server.listen(5000, () => console.log("Listening on port 5000..."));
// _______________________________________________________________________
// 🚀Example (1) for understanding async/sync behaviour
// const { readFile, writeFile } = require("fs");
// console.log("Start the task");
// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   console.log(first);
//   console.log("Reading file finished");
// });
// console.log("Next task");
/*
As a web developer, you 🔥MUST🔥 know what line of code is blocking or non blocking, 
in order to understand the code flow and behaviour.
for example for loop is blocking (sync) it means that it can not be offloaded by 'event loop'
another example is setTimeout(), this function is non blocking (async), means that it will be 
offloaded by event loop and setTimeout()'s callback function will beinvoked in the propper timing.
*/
// _______________________________________________________________________
// 🚀Example (2) for understanding async/sync behaviour
// console.log("First");
// setInterval(() => {
//   console.log("I am a non blocking code");
// }, 0);
// // No matter what we pass as a time in setTimeout() and setInterval(), these two always
// // have none blocking behaviour (asynchronous)
// console.log("Second");
