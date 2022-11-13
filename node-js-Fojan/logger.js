const message = () => {
    let myMsg = `<div>my family is precious</div>`;
    return myMsg;
}
const date = () => {
    return Date();
}
let name = "Makan";
module.exports.message = message;
module.exports.name = name;
module.exports.date = date;
// Key-Value pair: 
/* const exports = {
    log : const log = (name) => {
          console.log(`Hello, ${name}`);
        },
    name : "Makan",
    }
}*/ 