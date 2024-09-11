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
        const { name, desc, price, imageurl } = req.body;
        let errors = [];
        if (!name || name.trim() == '') {
            errors.push("Check your name before enter!");
        }
        if (!price || parseFloat(price) < 1) {
            errors.push("Price is not define")
        }
        try {
            const validUrl = new URL(imageurl);
        } catch (err) {
            errors.push('URL is invalid');
        }
        if (errors.length > 0) {
            return res.render("add-product", { errors: errors });
        }
        console.log(req.body);
        ProductModel.addData(req.body);
        let products = ProductModel.get();
        console.log(products);
        res.render("products", { products: products });
    }
}
module.exports = productController;