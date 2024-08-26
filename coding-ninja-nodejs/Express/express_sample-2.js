const express = require('express');
const server = express();
server.use(express.static("public"));
server.get("/", (req, res) => {
    res.end("Server is working");
});
const port = 4000;
server.listen(port, () => {
    console.log(`server is running in ${port}`);
})