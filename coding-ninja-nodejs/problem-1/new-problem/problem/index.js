// Please do not change the prewritten code


const Solution = async () => {
  const axios = require('axios');
  const endPoint = 'https://api.codingninjas.com/api/v3/event_tags';
  axios.get(endPoint)
    .then(response => {
      const data = response.data;
      console.log(data);
  })

};
Solution();
module.exports = Solution;
