import ProductModel from '../models/product.model.js';

class ProductsController {
  getProducts(req, res, next) {
    var products = ProductModel.getAll();
    res.render('index', { products });
  }

  getAddProduct(req, res, next) {
    res.render('new-product', {
      errorMessage: null,
    });
  }

  postAddProduct(req, res, next) {
    ProductModel.add(req.body);
    var products = ProductModel.getAll();
    res.render('index', { products });
  }

  UpdateProduct(req, res, next) {
    const id  = req.params.id;
    const productData = ProductModel.getById(id);
    if (productData) {
      res.render('update-product', { products: productData, errorMessage: null });
    }
    else {
      res.status(401).send("Product Id not present");
    }
    
  }
  UpdateProductData(req, res){
    ProductModel.getUpdate(req.body);
    var products = ProductModel.getAll();
    res.render('index', { products });
  }
}

export default ProductsController;
