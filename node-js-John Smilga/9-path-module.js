const path = require("path");
console.log(path.sep);
// Order does matter in path.join()
const filePath = path.join("/content", "subFolder", "test.txt");
console.log(`Normalized path address : ${filePath}`);
const base = path.basename(filePath);
console.log(base);
const absolute = path.resolve(__dirname, "content", "subFolder", "test.txt");
console.log(absolute);
