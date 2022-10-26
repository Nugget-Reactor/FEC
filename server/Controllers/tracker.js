const { axios, URL } = require('./env/config.js');

const ratings = {
  addInteraction: (req, res) => {
    axios.post(`${URL}/interactions`, req.body)
    .then(result=>res.sendStatus(201))
    .catch(err => {
      console.error(err);
      res.sendStatus(422);
    })
  }
};

module.exports = ratings;