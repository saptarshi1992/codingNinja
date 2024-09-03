const express = require('express');
const ejslayout = require('express-ejs-layouts')
const path = require('path');
const server = express();
//set the view engine //

server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));
server.use(ejslayout);
server.use(express.urlencoded({ extended: true }));

const productController = require('./src/controllers/products.controller.js');
const products = new productController();
server.get('/', products.getProducts);
server.get('/new', products.getAddForm);
server.post('/', products.addData);
const port = 5000;
server.listen(port, () => {
    console.log(`server is connecting in ${port}`)
})