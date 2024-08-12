const axios = require('axios');

exports.gpt4o = (query, system, id) => {
  return new Promise(async (resolve, reject) => {
    axios.get('https://api.yanzbotz.my.id/api/ai/gpt-4o', {
      params: {
        query: query,
        system: system,
        id: id,
        apiKey: 'yanzdev'
      }
    })
    .then(response => {
      // Make sure to resolve with the entire data object
      resolve(response.data);
    })
    .catch(error => {
      reject(error);
    });
  });
};
