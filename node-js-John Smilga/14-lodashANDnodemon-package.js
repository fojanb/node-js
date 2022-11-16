/*

👉FACT : npm comes with node (^_^)
How to check npm version on windows? open CLI and tyope 'npm -v'
___________________________
app.js is the ROOT module :
    app.js     
  /...|...\
YY...ZZ...XX
/|\ /|\  /|\
...      ...
___________________________
There are two types of methods to install a PACKAGE
1 - Locally (aka Local Dependencies)
2 - Globally (aka Global Dependencies)
___________________________
-Local Dependencies 👉 Use it only in this particular project.
📌i.e. npm i <packageName>
-Global Dependencies 👉 Use it in any project.
📌i.e. npm install -g <packageName>
___________________________
npm init:
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.
___________________________

👉FACT : Nodemon is a popular tool that is used for the development o
f applications based on node. js. It simply restarts the node 
application whenever it observes the changes in the file present 
in the working directory of your project.
*/
const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log("Hello Amir");