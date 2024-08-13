const http = require('http');
const server = http.createServer((req, res) => {
    res.write("server is starting..\n");
    console.log(req.url);
    
    if (req.url === '/first') {
       return  res.end("you are getting first response");
    }
        res.end("welcome to my server");
});

server.listen(3300, () => {
    console.log("server is listening on port number 3300");
});
