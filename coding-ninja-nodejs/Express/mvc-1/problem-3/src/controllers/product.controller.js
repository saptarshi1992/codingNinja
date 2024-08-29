// Please don't change the pre-written code
// Import the necessary modules here
import ProductModel from "../models/product.model.js";

export default class ProductController {

  getProducts = (req, res) => {
    const product = new ProductModel();
    res.render("products", { products: product.fetchProducts() });
  };
}
