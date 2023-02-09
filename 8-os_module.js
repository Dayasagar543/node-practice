const os = require('os');

// info about current user.

const user = os.userInfo();
console.log(user);


// info about system uptime.

const upttime = os.uptime();
console.log(` the system uptime is ${upttime}`);


const currenOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem:os.freemem()
}

console.log(currenOS)