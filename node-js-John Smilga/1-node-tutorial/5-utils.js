const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};
// Exporting a single value not a object. yes it is possible.
module.exports = sayHi;
// or
// module.exports = {sayHi}
