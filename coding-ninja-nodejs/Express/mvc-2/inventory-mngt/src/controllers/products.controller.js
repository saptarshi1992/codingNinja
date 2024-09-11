const path = require('path');
const ProductModel = require('../model/products.model.js');
class productController {
    getProducts(req, res) {
        let products = ProductModel.get();
        console.log(products);
        res.render("products", { products: products });
        // return res.sendFile(path.join(path.resolve(), "src", "views", "products.html"));
    }
    getAddForm(req, res) {
        res.render("add-product", { errors: null });
    }
    addData(req, res) {
        //validate data;
         
        console.log(req.body);
        ProductModel.addData(req.body);
        let products = ProductModel.get();
        console.log(products);
        res.render("products", { products: products });
    }
}
module.exports = productController;