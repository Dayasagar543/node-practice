//modules
// node usees common js , every file is module (by default)
//Modules -Encapsulated code (only share minimum)

const person = require('./4-names');
const sayHI = require('./5-utils');
const data = require('./6-alteranative_flav');
require('./7-mind_grande')

console.log(person);
sayHI("SUSAN")

console.log(data.single_person);


// console.log(module);


