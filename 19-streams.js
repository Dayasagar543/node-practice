const { createReadStream } = require('fs');
const { result } = require('lodash');

const stream = createReadStream('./contents/subfolder/Big_file.txt')

stream.on('data', (result) => {
    console.log(result);
})