/*

FACT : npm comes with node (^_^)
How to check npm version on windows? open CLI and tyope 'npm -v'
___________________________
There are two types of method to install a package
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
*/
const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems)