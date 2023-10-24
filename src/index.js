/*Під час завантаження сторінки має виконуватися HTTP-запит за колекцією порід */

import SlimSelect from 'slim-select';

import { fetchBreeds, fetchCatByBreed } from './cat-api';

const refs = {
  choiceOfCollection: document.querySelector('.breed-select'),
  loaderCollection: document.querySelector('.loader'),
  loadingError: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};

const { choiceOfCollection, loaderCollection, loadingError, catInfo } = refs;

let breedsCollection = [];

fetchBreeds()
  .then(data => {
    data.forEach(elem => {
      breedsCollection.push({
        text: elem.name,
        value: elem.id,
      });
    });
    markupSection(breedsCollection);
  })
  .catch(error => {
    console.log(error);
  });

function markupSection(breedsCollection) {
  const markupSect = breedsCollection
    .map(({ text, value }) => {
      return `<option value="${value}">${text}</option>`;
    })
    .join('');
  choiceOfCollection.innerHTML = markupSect;
}
choiceOfCollection.addEventListener('change', onChoice);

function onChoice(evn) {
  const breedId = evn.currentTarget.value;
  fetchCatByBreed(breedId)
    .then(data => renderCardCat(data))
    .catch(error => {
      console.log(error);
    });
}

function renderCardCat(data) {
  const { url, breeds } = data[0];

  const cardCat = `<div class='cardcat'><img src="${url}" alt="${breeds[0].name}" width="400">
    <h1>${breeds[0].name}</h1><p>TEMPERAMENT: ${breeds[0].temperament}</p><p>DESCRIPTION: ${breeds[0].description}</p></div>`;
  catInfo.innerHTML = cardCat;
}
