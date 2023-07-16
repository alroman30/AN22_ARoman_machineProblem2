const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderControllers');
const auth = require('../auth');

router.post('/getOrder', (req, res) => {
  orderController.createOrder(req.body)
    .then(resultFromController => res.send(resultFromController));
});

module.exports = router;