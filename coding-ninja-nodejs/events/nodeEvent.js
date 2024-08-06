const http = require('http');
const myServer = http.createServer((req, res) => {
    if (req.method == 'POST') {
        let body;
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            console.log("all data get from client");
        })
    }
    res.end("Welcome to my server");

});
myServer.listen(6000, () => {
    console.log("connected with my server");
});
