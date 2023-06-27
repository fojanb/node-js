const personMaker = (ingredients) => {
  const human = {
    name: ingredients.name,
    age: ingredients.age,
  };
  console.log(`New human is : name = ${human.name} age= ${human.age}`);
};
// console.log(__dirname)
module.exports = { personMaker };
