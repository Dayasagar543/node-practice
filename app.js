const {readFileSync,createReadStream}=require('fs')
const http = require('http');

const server = http.createServer((req, res) => {
    // const file = readFileSync('./contents/subfolder/Big_file.txt', 'utf8');
    // res.end(file);
    const filestream = createReadStream('./contents/subfolder/Big_file.txt', 'utf8');
    filestream.on('open', () => {
        filestream.pipe(res)
    })
    filestream.on('error', (err) => {
    res.end(err)
    })
})

server.listen(5000);