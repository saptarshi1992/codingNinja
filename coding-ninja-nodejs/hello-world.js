const http = require('http');
const server = http.createServer((req, res) => {
   res.end('Welcome to my ninja server!!')
});

server.listen(3000, () => {
    console.log('connecting with my server...')
});