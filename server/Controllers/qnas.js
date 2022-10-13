const { axios, URL } = require('./env/config.js');

const qnas = {
  get: (req, res) => {
    axios.get(`${URL}/qa/questions?product_id=40343`)
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