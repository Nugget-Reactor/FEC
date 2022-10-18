const { axios, URL } = require('./env/config.js');

const products = {
  getAll: (req, res) => {
    axios.get(`${URL}/products`)
      .then((result) => {
        res.json(result.data);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(404);
      });
  },
  getOne: (req, res) => {
    axios.get(`${URL}/products/${req.params.id}`)
      .then((result) => {
        res.json(result.data);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(404);
      });
  },
  getStyles: (req, res) => {
    axios.get(`${URL}/products/${req.params.id}/styles`)
      .then((result) => {
        res.json(result.data);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(404);
      });
  },
  addCart: (req, res) => {
    axios.post(`${URL}/cart`, req.body)
      .then((result) => {
        res.sendStatus(201);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(404);
      });
  }
};

module.exports = products;