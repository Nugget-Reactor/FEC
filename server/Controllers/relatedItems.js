const { axios, URL } = require('./env/config.js');
const _ = require('underscore');

const getProduct = (productID) => {
  return axios.get(`${URL}/products/${productID}`)
  .then((product) => {
    return product.data;
  })
  .catch((err) => console.log('err in related items', err));
};

const getStyle = (productID) => {
  return axios.get(`${URL}/products/${productID}/styles`)
  .then((product) => {

    return product.data;
  })
  .catch((err) => console.log('err in related items', err));
};
const getRelatedMeta = (productID) => {
  return axios.get(`${URL}/reviews/meta?product_id=${productID}`)
  .then((product) => {
  return product.data;

  })
  .catch((err) => console.log('err in related items', err));

};
//some items are coming back undefined - I need to ensure all promises are being completed before
module.exports = {
  getRelated: (req, res) => {

    return axios.get(`${URL}/products/${req.params.id}/related`)
    .then((results) => {
      var promiseArray = [];
      // results = _.uniq(results); // only use a unique array of related items
      // for (var i = 0; i < results.data.length; i++) {
      //   var product = getProduct(results.data[i]);
      //   var style = getStyle(results.data[i]);
      //   var meta = getRelatedMeta(results.data[i]);
      //   Promise.all([product, style, meta])
      //   .then((promises) => {console.log('prmise line 42', promises); promiseArray.push(promises);})
      //     .catch((err) => console.log('error line 43', err))

      var array = [];
      for (var i = 0; i < results.data.length; i++) {
        var product = getProduct(results.data[i]);
        var style = getStyle(results.data[i]);
        var meta = getRelatedMeta(results.data[i]);



      // return Promise.all([product, style, meta])
        array.push(product);
        array.push(style);
        array.push(meta);


      }
      // return promiseArray;
      return array;
    })
    // .then((returnedPromises) => )
    .then((productArray) => {
      Promise.all(productArray)
      .then((results) => {
        // console.log('results in related items', results);
        var newArray = [];
        for (var i = 0; i < results.length; i+=3) {
          var item1 = {...results[i], ...results[i+1], ...results[i+2]};
          // item1 = {...item1, ...item2, ...item3};
          newArray.push(item1);
        }
        // console.log('newArray', newArray[0]);
        // console.log('results in server/relatedItems', results[4].results[0].photos[0]);
        // maybe I can assemble the product here?
        res.json(newArray);
      })
    })
    .catch(err => {
      console.log('error in related items in server', err);
      res.sendStatus(404)
    });
  }
};