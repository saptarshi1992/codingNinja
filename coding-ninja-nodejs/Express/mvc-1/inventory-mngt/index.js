const express = require('express');
const server = express();
const productController = require('./src/controllers/products.controller');
const products = new productController();
server.get('/', products.getProducts);
const port = 5000;
server.listen(port, () => {
    console.log(`server is connecting in ${port}`)
})