const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name,age) => {
    console.log('data recieved' + ` the name of the ${name} and age is   ${age}`);
})

customEmitter.emit('response','rahul',32)
