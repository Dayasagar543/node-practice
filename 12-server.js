const http = require('http');

const server=http.createServer((req,res) => {
    if (req.url==='/') {
        res.end("welcome to the home page")
    }
    if (req.url === '/about') {
        res.end("this is our little history ")
    }
  
})

server.listen(5000);