const Product = require('../models/product');
const User = require('../models/user')

module.exports.addProduct = (reqBody, user) => {
  let userId = reqBody.userId
  let userAdmin = User.findById(userId)
  if (userAdmin) {
    let newProduct = new Product({
      productName: reqBody.productName,
      productDescription: reqBody.productDescription,
      productPrice: reqBody.productPrice
    });

    return newProduct.save().then((product, error) => {
      if (error) {
        return false;
      } else {
        return true;
      }
    });
  } else {
    return Promise.reject("Unauthorized access");
  }
}

module.exports.getAllProducts = () => {
  return Product.find().then(result => {
    if (result == null) {
      return false;
    } else {
      return result;
    }
  });
};

module.exports.getActiveProducts = () => {
  return Product.find({ isActive: true }).then(result => {
    if (result == null) {
      return false;
    } else {
      return result;
    }
  });
};

module.exports.getProduct = (data) => {
  return Product.findById(data.productId).then(result => {
    result.productName = "";
    return result;
  });
};