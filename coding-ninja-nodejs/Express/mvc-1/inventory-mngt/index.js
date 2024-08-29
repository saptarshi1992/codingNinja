const express = require('express');
const path = require('path');
const server = express();
//set the view engine //

server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

const productController = require('./src/controllers/products.controller');
const products = new productController();
server.get('/', products.getProducts);
const port = 5000;
server.listen(port, () => {
    console.log(`server is connecting in ${port}`)
})