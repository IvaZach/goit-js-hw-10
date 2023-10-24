/*Під час завантаження сторінки має виконуватися HTTP-запит за колекцією порід */

import SlimSelect from 'slim-select';

import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_ifmh6oPbVq3C79oeoUHjfiFPaEEaDAvg4T4IdcvT4xmyUaaw8BwCY0GvD4TvWQbK';
  
import { fetchBreeds } from './cat-api';

const refs = {
  choiceOfCollection: document.querySelector('.breed-select'),
  loaderCollection: document.querySelector('.loader'),
  loadingError: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

const { choiceOfCollection, loaderCollection, loadingError, catInfo } = refs;

choiceOfCollection.addEventListener('click', onChoice);

let breedsCollection = [];
const breeds_id = fetchBreeds().then(data => {
  data.forEach(elem => {
    breedsCollection.push({
      text: elem.name,
      value: elem.id,
    });
  });
  markupSection(breedsCollection);
 }).catch(error => {
  console.log(error);
} )
;

console.log('1', breedsCollection);

function onChoice(evn) {
  const form = evn.currentTarget.value;
  const choiceQuery = {};
  // form = API.fetchBreeds()
  console.dir(form);
  console.log(choiceQuery);
}

function markupSection(breedsCollection){
  const markupSect = breedsCollection.map(({text, value}) =>{
    return `<option value="${value}">${text}</option>`;
  }).join("");
  choiceOfCollection.innerHTML = markupSect;
}



// const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p>${body}</p>
//         </li>`;
//     })
//     .join("");
//   postList.innerHTML = markup;

//   <!-- Начально будет выбрано второе значение -->
// <select name="select">
//   <!--Supplement an id here instead of using 'name'-->
//   <option value="value1">Значение 1</option>
//   <option value="value2" selected>Значение 2</option>
//   <option value="value3">Значение 3</option>
// </select>

// let select = new SlimSelect({
//   select: '#selectElement'
// })
// let values = select.getSelected() // Will return an array of strings
// console.log(values)

// new SlimSelect({
//     select: '#selectElement'
//   })
/*
<select id="single">
  <option value="value 1">Value 1</option>
  <option value="value 2">Value 2</option>
  <option value="value 3">Value 3</option>
</select>
*/
