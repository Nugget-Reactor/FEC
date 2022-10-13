const axios = require('axios');

const defaultOptions = {
  headers: {
    'Authorization': "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"
  }
}

const authAxios = axios.create(defaultOptions);

const URL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp";

module.exports.axios = authAxios;
module.exports.URL = URL;