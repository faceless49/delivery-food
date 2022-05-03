const axios = require('axios').default;

export const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});
