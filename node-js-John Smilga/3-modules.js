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
___<SOME IMPORTANT MODULES (node and npm)>___
Http (built-in node.js module) -> For creating a server
fs (built-in node.js module)   -> For CRUD files
URL (built-in node.js module)  -> For working with paths
events (built-innode.js module) -> For raising an event
uc (NPM package)
Formidable (NPM package) -> For uploading a file
Nodemailer (NPM package) -> For sending an e-mail
mysql (NPM package)
<FOR MORE INFO HEAD OVER TO nodejs.org>
______________________________
*/
const names = require("./4-names");
const sayHi = require("./5-utils");
const myData = require("./6-alternative-syntax");
require("./7-mind-grenade");
// sayHi(names.name.fojan);
// sayHi(names.name.makan);
// costume module 👉 require("./jsFileName") relative path
// built-in module 👉 require("moduleName")