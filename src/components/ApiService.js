import axios from 'axios';
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
const BASE_URL = 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus';
const loompaListUrl = '/oompa-loompas?page=';
const loompaDetailsUrl = '​/oompa-loompas/';

const fetchLoompas = (url) => {
  return axios.get(`${BASE_URL}${url}`)
    .then((res) => {
      return res.status <= 400 ? res : Promise.reject(res);
    })
    .catch((err) => {
      console.log(`API-SERVICE: ${err.message} while fetching ${BASE_URL}${url}`);
    });
};

export default {
  allLoompas: (page = 1) => fetchLoompas(`${loompaListUrl}${page}`),
  oneLoompa: (id) => fetchLoompas(`${loompaDetailsUrl}${id}`),
};
