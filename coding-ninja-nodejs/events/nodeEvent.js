const http = require('http');
const myServer = http.createServer((req, res) => {
    if (req.method == 'POST') {
        let body;
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            console.log(body);
        })
    }
    res.end("Welcome to my server");

});
myServer.listen(7000, () => {
    console.log("connected with my server");
});