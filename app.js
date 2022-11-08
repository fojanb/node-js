// const logger = require("./logger");
// const path = require('node:path');
// const os = require('node:os');
// const fs = require("node:fs");
// const fsObj = fs.readdirSync("./");
// fs.readdir("./", (err, files) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Results:", files);
//   }
// });
// const pathObj = path.parse(__filename);
// const freeMem = os.freemem();
// const totalMem = os.totalmem();
// console.log(`Freemem:${freeMem}\ntotalMem:${totalMem}`);
// console.log(fsObj.find(file => file.charAt(0)==='l'));
// logger.log("FOJAN BABAALI");
// console.log("My path object", pathObj);
const EventEmitter = require("node:events");
const emitter = new EventEmitter();
// Register a listener
emitter.on("event", (arg) => {
  console.log(arg);
});
// Trigger the event
emitter.emit("event",{id:1,url:"http://"});
