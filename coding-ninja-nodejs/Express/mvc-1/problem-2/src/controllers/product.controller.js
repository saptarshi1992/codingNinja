// Import the necessary modules here
import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts = (req, res) => {
    //  Write your code here
    const product = new ProductModel();
    res.send(product.fetchProducts());
  };
}

