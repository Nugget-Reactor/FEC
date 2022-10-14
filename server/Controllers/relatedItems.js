const { axios, URL } = require('./env/config.js');
const _ = require('underscore');

const getProduct = (productID) => {
  return axios.get(`${URL}/products/${productID}`)
  .then((product) => {
    // console.log('product', product.data)
    return product.data;
  })
  .catch((err) => console.log('err in related items', err));
};

const getStyle = (productID) => {
  return axios.get(`${URL}/products/${productID}/styles`)
  .then((product) => {
    // console.log('style data', product.data)
    return product.data;
  })
  .catch((err) => console.log('err in related items', err));
};

const getRatings = (productID) => {
  return axios.get(`${URL}/reviews/meta?product_id=${productID}`)
  .then((product) => {
    var totalRatings = 0;
    var numberOfRatings = 0;
    var multiplier = 1; // each 1 star review is worth value 1, and 2 : 2, etc.
    for (var ratingKey in product.data.ratings) {
      var currentRatings = Number(product.data.ratings[ratingKey]);
      totalRatings += (currentRatings * multiplier);
      numberOfRatings += currentRatings;
      multiplier++;
    }
    var averageStars = totalRatings/numberOfRatings;
    var obj = {};  //haven't decided how to package this up yet, but this is one option
    obj[productID] = {rating: totalRatings/numberOfRatings};
    return obj;
  })
  .catch((err) => console.log('err in related items', err));
};

module.exports = {
  getRelated: (req, res) => {
    return axios.get(`${URL}/products/${req.params.id}/related`)
    .then((results) => {
      var array = [];
      for (var i = 0; i < results.data.length; i++) {
        var product = getProduct(results.data[i]);
        var style = getStyle(results.data[i]);
        var ratings = getRatings(results.data[i]);
        // //might have to iterate the style array?
        // console.log('style in get', style);
        // var result = _.extend(product, style);
        array.push(product);
        array.push(style);
        array.push(ratings);


      }
      return array;
    })
    .then((productArray) => {
      Promise.all(productArray)
      .then((results) => {
        // maybe I can assemble the product here?
        res.json(results);
      })
    })
    .catch(err => {
      console.log('error in related items in server', err);
      res.sendStatus(404)
    });
  }
};