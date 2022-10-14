const express = require('express');
const router = express.Router();
const controllers = require('./Controllers');

router.get('/products', controllers.products.getAll);
router.get('/products/:id', controllers.products.getOne);
router.get('/products/:id/styles', controllers.products.getStyles);
router.get('/products/:id/related', controllers.relatedItems.getRelated);
router.get('/reviews', controllers.ratings.get);

router.get('/questions', controllers.qnas.get);

module.exports = router;