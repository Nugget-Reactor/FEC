const { axios, URL } = require('./env/config.js');
const _ = require('underscore');

const getProduct = (productID) => {
  return axios.get(`${URL}/products/${productID}`)
  .then((product) => {
    return product.data;
  })
  .catch((err) => console.log('err in related itemsline 9'));
};

const getStyle = (productID) => {
  return axios.get(`${URL}/products/${productID}/styles`)
  .then((product) => {
    return product.data;
  })
  .catch((err) => console.log('err in related items line 18'));
};

const getRelatedMeta = (productID) => {
  return axios.get(`${URL}/reviews/meta?product_id=${productID}`)
  .then((product) => {
    return product.data;
  })
  .catch((err) => console.log('err in related items line 26'));

};
//some items are coming back undefined - I need to ensure all promises are being completed before
module.exports = {

  getRelated: (req, res) => {
    axios.get(`${URL}/products/${req.params.id}/related`)
    .then((results) => {
      return _.uniq(results.data, true);
    })
    .then((results) => {
      var array = [];
      // console.log('results in relateditems.js line 35', results.data); //confirmed an error is happening from subsequent requests. these numbers always come through ok.
      return Promise.all(results.map((itemNumber) => {
        return Promise.all([getProduct(itemNumber), getStyle(itemNumber), getRelatedMeta(itemNumber)])
        .then(results => {
          results = {...results[0], ...results[1], ...results[2]};
          return results;
        })
        .catch(err => console.log('error line 49'));
      }))
    })
    .then((productArray) => {
      var productIdArray = [];
      for (var i = 0; i < productArray.length; i++) {
        productIdArray.push(productArray[i].id);
      }
      // console.log('productidarray', productIdArray);

      res.json(productArray);
    })
    .catch(err => console.log('error line 71 relatedItems.js'));
  }
};
