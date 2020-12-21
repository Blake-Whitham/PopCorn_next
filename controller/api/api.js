const axios = require('axios');
const key = require('../../api_key');

const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`;

module.exports = {
  getTopRated: (req, res) => {
    axios
      .get(topRated)
      .then((response) => { res.status(200).send(response.data); })
      .catch((err) => { res.status(400).send(err); });
  },
};
// https://www.themoviedb.org/settings/api
