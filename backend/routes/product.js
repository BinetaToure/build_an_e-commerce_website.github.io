const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/product');

router.get('/api/products', productCtrl.getAllProducts);
router.get('/api/products/:id', productCtrl.getOneProduct);
router.post('/api/products/order', productCtrl.orderProducts);

module.exports = router;