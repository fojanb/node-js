const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


// showText = Wrapper function for our Promise
const showText = async () => {
  try {
    const first = await readFile("./content/Home/index.html", "utf8");
    const second = await readFile("./content/About/about.html", "utf8");
    await writeFile(
      "./content/mind-grenade.txt",
      `${first} ----------------- ${second}`
    );
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};
showText();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// getText("./content/Home/index.html")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
