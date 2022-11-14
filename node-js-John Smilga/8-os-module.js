const os = require("os");
// Info about the current user 👇
const user = os.userInfo();
// Let's returns the system uptime in number of seconds 👇
const upTime = os.uptime();
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);