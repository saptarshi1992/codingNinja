const express = require('express');
const server = express();
function firstMiddleware(req,res,next){
    console.log("this is firstmiddleware");
    console.log(req.method);
    next();
}
function secondMiddleware(req,res,next) {
    console.log("this is secondmiddleware");
    console.log(req.path);
    next();
}
function globalMiddleware(req, res, next) {
    console.log("this is application-level middleware");
    next();
}
server.use(globalMiddleware);

server.get("/send", [firstMiddleware, secondMiddleware], (req, res) => {
    res.send("this is test case for express");
})
const port = 5000;
server.listen(port, () => {
    console.log(`server is connecting in ${port}`);
})