/// This goes into dotenv
// const apiKey = 'BRAcV4pPJZRxRNFO3cHwYFC4RBxkQpgap8UEj8pz';

//APOD instructions:
//Allowed request fields for apod method are
//'concept_tags', 'date', 'hd', 'count', 'start_date', 'end_date'

export const APOD = {
    parseQuery: (query) => {
    let res = '';
    for(let key in query) {
      if (query.hasOwnProperty(key) === true) {
        res += `&${key}=${query[key]}`
      }
    }
    return res;
  },
  key : 'BRAcV4pPJZRxRNFO3cHwYFC4RBxkQpgap8UEj8pz',
  url : 'https://api.nasa.gov/planetary/apod',

// const API = (apiUrl, query) => {
//
//   const endPoint = `${apiUrl}?api_key=${apiKey}${parseQuery(query)}`;
//
//   console.log('Fetching:', endPoint);
//   fetch(endPoint)
//     .then(res => res.json())
//     .then(json => (console.log(json)))
//     .then(data => {
//       return data;
//     })
// }
}
