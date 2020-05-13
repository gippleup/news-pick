const axios = require('axios').default;
const {apiBase} = require('../../../config');
async function digNews (newslink) {
  let data = await axios({
    method: 'POST',
    url: `${apiBase}/digNews`,
    data: {
      url: newslink
    }
  })
  return data;
}

export default digNews