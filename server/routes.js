const express = require('express');
const router = express.Router();
const controllers = require('./Controllers');

//Product Routes
router.get('/products', controllers.products.getAll);
router.get('/products/:id', controllers.products.getOne);
router.get('/products/:id/styles', controllers.products.getStyles);
router.get('/products/:id/related', controllers.relatedItems.getRelated);
router.post('/cart', controllers.products.addCart);

//Reviews Routes
router.get('/reviews', controllers.ratings.get);
router.get('/reviews/meta', controllers.ratings.getMeta);
router.put('/reviews/:review_id/helpful', controllers.ratings.helpful);
router.put('/reviews/:review_id/report', controllers.ratings.report);
router.post('/reviews', controllers.ratings.addReview);

//Questions Routes
router.get('/qa/questions', controllers.qnas.getQs);
router.get('/qa/questions/:question_id/answers', controllers.qnas.getAs);
router.post('/qa/questions', controllers.qnas.addQ);
router.post('/qa/questions/:question_id/answers', controllers.qnas.addA);
router.put('/qa/questions/:question_id/helpful', controllers.qnas.markQHelpful);
router.put('/qa/questions/:question_id/report', controllers.qnas.reportQ);
router.put('/qa/answers/:answer_id/helpful', controllers.qnas.markAHelpful);
router.put('/qa/answers/:answer_id/report', controllers.qnas.reportA);

module.exports = router;