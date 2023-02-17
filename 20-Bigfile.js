const { writeFileSync } = require('fs');

for (let i = 0; i < 500; i++){
    writeFileSync('./contents/subfolder/Big_file.txt', `this is a big file ${i} \n`, { flag: 'a' });
}