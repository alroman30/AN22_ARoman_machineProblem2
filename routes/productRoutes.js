const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');
const auth = require('../auth');

// route for product registration
router.post('/addProduct', (req, res) => {
  productController.addProduct(req.body)
    .then(resultFromController => res.send(resultFromController));
});

// get all products
router.get('/getAllProducts', (req, res) => {
  productController.getAllProducts(req.body)
    .then(resultFromController => res.send(resultFromController));
});

router.get('/activeProducts', (req, res) => {
  productController.getActiveProducts(req.body)
    .then(resultFromController => res.send(resultFromController));
});

router.get('/getProduct', (req, res) => {
  productController.getProduct({ productId: req.body.id })
    .then(resultFromController => res.send(resultFromController));
});


module.exports = router;