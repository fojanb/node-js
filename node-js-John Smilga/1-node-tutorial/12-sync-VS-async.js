// ASYNC VS. SYNC

// const { readFileSync, writeFileSync } = require("fs");

// console.log("Start");
// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");

// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the sync result : ${first} , ${second}`,
//   { flag: "a" }
// );
// console.log("Done with this task");
// console.log("Starting a new one...");

const { readFile, writeFile } = require("fs");

console.log("Start");
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
      }
    );
    console.log("Done with this task");
  });
});
console.log("Starting a new one...");

/* Example : setTimeout() is an asynchronous function, meaning that the timer 
function will not pause execution of other functions in the functions stack.*/
