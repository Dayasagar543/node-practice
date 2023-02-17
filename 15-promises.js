const { readFile } = require('fs');

let gettext = (path) => {
    return new Promise((resovle, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resovle(data);
            }
        })
    }
    )
}

gettext('./contents/subfolder/test.txt').then((data) => { console.log(data) }).catch((err) => { console.log(err) });