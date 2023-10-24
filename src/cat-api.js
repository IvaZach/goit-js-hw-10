import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_ifmh6oPbVq3C79oeoUHjfiFPaEEaDAvg4T4IdcvT4xmyUaaw8BwCY0GvD4TvWQbK';

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_ifmh6oPbVq3C79oeoUHjfiFPaEEaDAvg4T4IdcvT4xmyUaaw8BwCY0GvD4TvWQbK';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
}


// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });

