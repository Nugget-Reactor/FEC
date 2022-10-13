const { axios, URL } = require('./env/config.js');

const ratings = {
  get: (req, res) => {
    axios.get(`${URL}/products`)
    .then((result) => {
      res.json(result.data)
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(404)
    });
  }
};

module.exports = ratings;