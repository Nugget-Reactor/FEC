const axios = require('axios');

const defaultOptions = {
  headers: {
    'Authorization': 'INSERT GIT KEY HERE' //<-------------------
  }
}

const authAxios = axios.create(defaultOptions);

export default authAxios;