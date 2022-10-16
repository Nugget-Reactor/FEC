const { axios, URL } = require('./env/config.js');

const ratings = {
  get: (req, res) => {

    axios.get(`${URL}/reviews?product_id=${req.query.product_id}&sort=${req.query.sort}&count=${req.query.count}`)
    .then((result) => {
      res.json(result.data)
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(404)
    });
  },

  getMeta: (req, res) => {
    axios.get(`${URL}/reviews/meta?product_id=${req.query.product_id}`)
    .then((result) => {
      res.json(result.data)
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(404);
    })
  }
};

module.exports = ratings;