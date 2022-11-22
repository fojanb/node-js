const EventEmitter = require("events");
const cutomeEmitter = new EventEmitter();
// on ---> listen for an event
// emit--> emit an event
cutomeEmitter.on("response", () => {
  console.log("data recieved");
});
cutomeEmitter.emit("response");
