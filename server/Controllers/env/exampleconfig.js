const axios = require('axios');

const defaultOptions = {
  headers: {
    'Authorization': 'INSERT GIT KEY HERE' //<-------------------
  }
}

const authAxios = axios.create(defaultOptions);

const URL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp";

module.exports.axios = authAxios;
module.exports.URL = URL;