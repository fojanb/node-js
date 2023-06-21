// secret is going to be a LOCAL variable for 4-names.js and hidden from other
// modules (js files)
const secret = "SUPER SECRET";
// fojan and makan are SHARABLE variables to the whole app
const fojan = "Fojan";
const makan = "Makan";
module.exports.name = { fojan, makan };

/* 

[-year]-------CommonJS------->[2015]<-----------ES6-------[+year]
             /    |    \                      /   |   \
            /     |     \                    /    |    \
function keyword,    module.exports,       let,       import/export
var keyword             require           const,                                             
                                        arrow function,
                                        Array.map(),
                                        destructuring
*/
