// <Asynchronous = non-blocking>
const { readFile, writeFile } = require("fs");
// ____________________________________________________________
// CAllBACK HELL 👇 Solution to the callback hell (nested callback)👉Promise();
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the async result : ${first} , ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
// 🍄fs module's functions are 2 types : Async and Sync
// 🍄Promise(), Asynchronousity, callbacks, async/await keywords, off-loading
// 🍄Asynchronousity === non-blocking (execute code lines up to down BUT whenever needed 
// 🍄you can jump over of some lines of codes (aka off-loading those lines of codes 
//  that have asynchronous behavoiur) 
// 🍄Synchronousity === blocking (execute code lines from up to down)
// 🍄Asynchromous approach is faster than the synchronous approach

 
