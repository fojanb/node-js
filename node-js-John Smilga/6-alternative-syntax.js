const items = ["item1", "item2"];
const person = {
  name: "Makan",
};

module.exports.myData = { items, person };
/*
// Key-Value pair👇
(2 Levels)
module.exports.KEY = VALUE;
exports = {
  myData : {
    items : ["item1", "item2"],
    person : {
  name: "Makan",
    },
  }
}
*/

/*
// Key-Value pair👇 
(1 Level)
module.exports.items = items;
module.exports.person = person;

exports = {
  items : ["item1", "item2"],
  person : {
    name: "Makan",
  }
}

*/
