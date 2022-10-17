const { axios, URL } = require('./env/config.js');

const qnas = {
  getQs: (req, res) => {
    console.log('questions request', req)
    axios.get(`${URL}/qa/questions?product_id=${req.query.product_id}`)
      .then((result) => {
        res.status(200).json(result.data)
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(404)
      });
  }
};

module.exports = qnas;