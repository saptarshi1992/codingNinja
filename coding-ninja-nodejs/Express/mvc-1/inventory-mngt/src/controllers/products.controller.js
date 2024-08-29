const path = require('path');
const ProductModel = require('../model/products.model.js');
class productController {
    getProducts(req, res) {
        let products = ProductModel.get();
        console.log(products);
        res.render("products", { products: products });
       // return res.sendFile(path.join(path.resolve(), "src", "views", "products.html"));
    }
}
module.exports = productController;