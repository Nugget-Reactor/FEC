const { axios, URL } = require('./env/config.js');

const qnas = {
  getQs: (req, res) => {
    axios.get(`${URL}/qa/questions?product_id=${req.query.product_id}&count=50`)
      .then((result) => {
        res.status(200).json(result.data)
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(404);
      });
  },
  getAs: (req, res) => {
    axios.get(`${URL}/qa/questions/${req.params.question_id}/answers`)
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
    console.log('add answer req body', req.body);
    axios.post(`${URL}/qa/questions/${req.params.question_id}/answers`, req.body)
      .then(result => res.sendStatus(201))
      .catch(err => res.sendStatus(500))
  },
  markQHelpful: (req, res) => {
    axios.put(`${URL}/qa/questions/${req.params.question_id}/helpful`)
      .then(result => res.sendStatus(204))
      .catch(err => res.sendStatus(500))
  },
  reportQ: (req, res) => {
    axios.put(`${URL}/qa/questions/${req.params.question_id}/report`)
      .then(result => res.sendStatus(204))
      .catch(err => res.sendStatus(500))
  },
  markAHelpful: (req, res) => {
    axios.put(`${URL}/qa/answers/${req.params.answer_id}/helpful`)
      .then(result => res.sendStatus(204))
      .catch(err => res.sendStatus(500))
  },
  reportA: (req, res) => {
    axios.put(`${URL}/qa/answers/${req.params.answer_id}/report`)
      .then(result => res.sendStatus(204))
      .catch(err => res.sendStatus(500))
  }
};

module.exports = qnas;