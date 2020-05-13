const axios = require('axios');
const {apiBase} = require('../../../config');
const {toQuery} = require('../../../helper/fetch');

async function fetchNews(query, display=100, start=1, sort = 'date') {
  let fetch100 = async (start = 1) => {
    let baseUrl = apiBase + '/search/news?'
    let queries = toQuery({query, display, start, sort})
    let apiUrl = encodeURI(baseUrl + queries);
    let json = await axios({
      method:'GET',
      url: apiUrl,
      responseType: 'json'
    })
      .then((res) => res.data);
    return json
  }

  let data = await fetch100();
  // let fetchAll = async(start=1, result=[]) => {
  //   if (start <= 10) {
  //     let subFetch = await fetch100(1 + (start - 1) * 100)
  //     result.push(subFetch);
  //     return new Promise((resolve, reject) => {
  //       setTimeout(()=>{
  //         resolve(fetchAll(start + 1, result))
  //       }, 100)
  //     })
  //   } else {
  //     return result;
  //   }
  // }

  // let results = await fetchAll()
  // let allItems = results.reduce((acc, block) => acc.concat(block.items), [])
  // let sum = Object.assign(results[0], {items:allItems})
  // return sum;
  return data;
}

export default fetchNews
