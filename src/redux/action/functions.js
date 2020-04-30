import {toQuery} from '../../helper/fetch'

async function fetchNews(query, display=20, start=1, sort = 'date') {
  let baseUrl = 'https://europe-west1-naverapi.cloudfunctions.net/naverApi/search/news?'
  let queries = toQuery({query, display, start, sort})
  console.log(queries);
  let apiUrl = baseUrl + queries;
  let json = await fetch(apiUrl).then(res => res.json());
  return json
}

export default {
  fetchNews,
}