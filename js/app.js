const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=> {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1><strong>Este es el servior jaimito</strong></h1>\n');
});

server.listen(port, hostname,()=>{
    console.log('servidor esta jaimito sobre hhtp://${hostname}:${port}')
});