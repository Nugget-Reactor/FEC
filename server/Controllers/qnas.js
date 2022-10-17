const { axios, URL } = require('./env/config.js');

const qnas = {
  getQs: (req, res) => {
    axios.get(`${URL}/qa/questions?product_id=${req.query.product_id}`)
      .then((result) => {
        res.status(200).json(result.data)
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(404);
      });
  },
  getAs: (req, res) => {
    axios.get(`${URL}/qa/questions/${req.query.question_id}/answers`)
      .then((result) => {
        res.status(200).json(result.data)
      })
      .catch(err => {
        console.log('get answers error', err);
        res.sendStatus(404);
      });
  },
  addQ: (req, res) => {
    // console.log('add question req body', req.body);
    axios.post(`${URL}/qa/questions?product_id=${req.body.product_id}`, req.body)
      .then(result => res.sendStatus(201))
      .catch(err => res.sendStatus(500))
  },
  addA: (req, res) => {
    // console.log('add answer req body');
    axios.post(`${URL}/qa/questions/${req.query.question_id}/answers`, req.body)
      .then(result => res.sendStatus(201))
      .catch(err => res.sendStatus(500))
  }
};

module.exports = qnas;