const express = require('express');
const server = express();
server.get('/', (req, res) => {
    res.send("server is connecting");
});
const port = 5000;
server.listen(port, () => {
    console.log(`server is connecting in ${port}`)
})