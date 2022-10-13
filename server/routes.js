const express = require('express');
const router = express.Router();
const controllers = require('./Controllers');

router.get('/products', controllers.products.get);

router.get('/reviews', controllers.ratings.get)

router.get('/questions', controllers.qnas.get)

module.exports = router;