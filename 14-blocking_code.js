let http = require('http');

let server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('home page');
    }
    if (req.url === '/about')
    {
        for (let i = 0; i < 100; i++){
            for (let j = 1; j < 200; j++){
                console.log(i, j);
            }
        }
        res.end('about');
    }
    // res.end('return to home page');
   
})


server.listen(5000, () => {
    console.log('server listening on port');
});