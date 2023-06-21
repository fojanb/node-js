/*
👉FACT : npm comes with node (^_^)
How to check npm version on windows? open CLI and tyope 'npm -v'
How to check node version on windows? open CLI and tyope 'node -v'
___________________________
📌Package, dependencies and modules in npm : are reusable JavaScript codes, simple enough. 
___________________________
There is no quality control over npm registery, anyone can publish anything.
So how to know if a npm package is worth the use ? Checkout the amount of downloades.
For example the bootstarp package inside the npm has a 5,690,361 weekly download,
So it means that this package has already well desigend and debugged.
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
📌i.e. sudo i <packageName> (mac)
-Global Dependencies 👉 Use it in any project.
📌i.e. npm install -g <packageName>
📌i.e. sudo install -g <packageName> (mac)
___________________________
npm init:
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

If you want to run (i.e. npm start in react app) a forked npm repository from github
you must type npm install in the terminal to install all of the dependencies that comes with that
project and already git ignored. other than that you will run into a nasty error.
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
console.log(newItems);