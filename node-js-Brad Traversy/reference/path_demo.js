const path = require("path");
console.log(__dirname);
console.log(__filename);

// 🍄 Base file name
console.log(path.basename(__dirname));
console.log(path.basename(__filename));

// 🍄 Directory name
// Remember these two all equal :
console.log(path.dirname(__filename));
console.log(__dirname);
const flag = path.dirname(__filename) === __dirname;
console.log(flag); // flag is true

// 🍄 File extension
console.log(path.extname(__filename))

// 🍄 Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).root);
console.log(path.parse(__filename).base);
const flagg = path.parse(__filename).base === path.basename(__filename)
console.log(flagg);

// 🍄 Concatenate path
console.log(path.join(__dirname,"test","hello.html"))
