/*  
______________________________
app.js is the ROOT module :
    app.js     
  /...|...\
YY...ZZ...XX
/|\ /|\  /|\
...      ...
______________________________
CommonJS, every file in node is module (by default)
module -> Encapsulated code (share minimum)
___<SOME IMPORTANT MODULES>___
Http (node.js module) -> For creating a server
fs (node.js module)   -> For CRUD files
URL (node.js module)  -> For working with paths
events (node.js module) -> For raising an event
uc (NPM package)
Formidable (NPM package) -> For uploading a file
Nodemailer (NPM package) -> For sending an e-mail
mysql (NPM package)
<FOR MORE INFO HEAD OVER TO nodejs.org>
______________________________
*/
const names = require("./4-names");
const sayHi = require("./5-utils");
const myData = require("./3-alternative-syntax");
require("./6-mind-grenade");
// sayHi(names.name.fojan);
// sayHi(names.name.makan);
