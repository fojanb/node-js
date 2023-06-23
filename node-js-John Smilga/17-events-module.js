const EventEmitter = require("events");
const cutomeEmitter = new EventEmitter();
cutomeEmitter.on("response", () => {
  console.log("data recieved");
});
cutomeEmitter.on("response", (name, age) => {
  console.log(`${name} is ${age} yro`);
});
cutomeEmitter.emit("response", "Maki", 34);

/* 

1-Order matters here : first listen for event and then emit it
🥕on ---> listen for an event
🥕emit--> emit an event
2-We can use a listener more than once with different login inside of it 
3-nodejs and vailla js are both event-driven 
4-Keep track of the order first on and then emit
5-Additional arguments (Maki and 34)
_____________________________________________
We don't have GUI(buttons,links,...) in node (server), so what does really events mean in node?
*/
