/* 
👉 GLOBALS - NO WINDOW !!!
We do not have window object on the nodejs envrionment, why? because we dont have
browser!
👉 What is nodejs? An environment to run JavaScript outside of the browser.
________________________
Globals in nodejs 👇
__dirname  👉  path to current directory
__filename 👉  file name
module     👉  capsulated infos about current module (js file)
           👉  capsulated codes that only shares minimum
require    👉  function to use modules (CommonJS)
exports    👉  for extracting object (single vars, function and etc) from a module
proccess   👉  info about the env where the program is being executed 
________________________
node.js is asynchronous (non-blocking) or single-threaded 
(How all of these? because JavaScript is a asynchronus programming language).
node.js is based on modularity
________________________
🍄 Asynchronous === non-blocking
🍄 Synchronous  === blocking
🍀 Asynchronousity uses callback functions (aka eventHandlers)
🍀 Callback function === eventHandlers 
________________________
TYPEs OF MODULE (3 types) 👇
1-Our own written modules aka costume modules (a regular js file, nothing fancy)
2-node.js's built-in modules -> i.e. HTTP module
3-npm modules (aka packages) -> need to be install inside package.json
________________________
👉 Any JavaScript file is a "module".
JavaScript file = module
*/
