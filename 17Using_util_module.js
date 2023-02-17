const { readFile, writeFile } = require('fs');
const util= require('util');

let promRead = util.promisify(readFile);
let promWrite = util.promisify(writeFile);

let output = async () => {
    try {
        let output1 = await promRead('./contents/subfolder/test.txt','utf8');
        console.log(output1);
        await promWrite('./contents/result3.txt',`${output1}`);
      
    }
    catch (err) {
        console.log(err);
    }
}
output()