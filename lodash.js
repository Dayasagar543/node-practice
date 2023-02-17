const _ = require('lodash');

let array = [1, [2, [3, [4, [5, [6]]]]]]
let newarray = _.flattenDeep(array);
console.log(newarray);
console.log("nodemon");