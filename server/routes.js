const express = require('express');
const router = express.Router();
const controllers = require('./Controllers');

router.get('/products', (req, res) => {
})

router.get('/reviews', (req, res) => {
})

router.get('/questions', controllers.qnas.get)

module.exports = router;