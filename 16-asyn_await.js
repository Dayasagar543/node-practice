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

// gettext('./contents/first.txt').then((data) => { console.log(data) }).catch((err) => { console.log(err) });

let run = async () => {
    try{ const first = await gettext('./contents/first.txt')
         const second = await gettext('./contents/second.txt')
        console.log(first,second);
    } catch(error){
        console.log(error);
    }
   }

run()