// Import two node core modules
const fs = require("fs");
// 🍄 CRUD
// -Read files
// -Create files
// -Update files
// -Delete files
// -Rename files
const path = require("path");

// 🍄Create a folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Successfully creates a directory (folder) (^_^)");
//   // 🍄Create a file inside the above folder that you already created and write in to it as well
//   fs.writeFile(
//     path.join(__dirname, "/test", "hello.html"),
//     "I love nodejs",
//     (err) => {
//       if (err) throw err;
//       console.log("File created successfully");
//       // 🍄File append
//       fs.appendFile(
//         path.join(__dirname, "/test", "hello.html"),
//         "  I am the second text",
//         (err) => {
//           if (err) throw err;
//           console.log("Appended successfully");
//         }
//       );
//     }
//   );
// });
// Read a file
fs.readFile(
    path.join(__dirname, "/test", "hello.html"),
    "utf8",
    (err, data) => {
      if (err) throw err;
      console.log(data);
      console.log("Successfully read the file");
    }
  );
