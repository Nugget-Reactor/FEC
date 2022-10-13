const { axios, URL } = require('./env/config.js');

// get for related items
// get for styles
// get for prices/sale prices
module.exports = {
  getRelated: (req, res) => {
    return axios.get(`${URL}/products/${req.params.id}/related`)
    .then((results) => {
      return results.data.map((result) => {
        return axios.get(`${URL}/products/${result}`)
        .then((product) => {
          return product.data;
        })
        .catch((err) => console.log('err in related items', err));
      });
    })
    .then((productArray) => {
      Promise.all(productArray)
      .then((results) => {
        res.json(results);
      })

    })
    .catch(err => {
      console.log('error in related items line 29', err);
      res.sendStatus(404)
    });
  }
};