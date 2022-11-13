const os = require("os");
// Info about the current user ->
const user = os.userInfo();
// Let's returns the system uptime in number of seconds ->
const upTime = os.uptime();
console.log(`The system uptime in number of seconds : ${os.uptime()}`);
