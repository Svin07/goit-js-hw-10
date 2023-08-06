import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_s5HaeA4yau3sUEqEWEjLHkqxQulHzNjzVLCDJyEL4xfK5L1hnvvjDyTlURUNIfde";

// import SlimSelect from 'slim-select';
// import 'slim-select/dist/slimselect.css';
// new SlimSelect({
//     select: '#selectElement'
//   })

import { fetchCatByBreed, fetchBreeds } from "./cat-api";





const breedsList = document.querySelector('.breed-select');
const loading = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfoImg = document.querySelector('.cat-info-img');
const catInfoText = document.querySelector('.cat-info-text');
const catInfo = document.querySelector('.cat-info');
breedsList.addEventListener('change', onBreedsList);










fetchBreeds().then(data => breedsList.innerHTML = createSelectList(data)).catch(err => {
    error.classList.remove("is-hidden");
    breedsList.classList.add("is-hidden");
    
})
    .finally(() => {
    loading.classList.add("is-hidden");
        breedsList.classList.remove("is-hidden");
        
})


function createSelectList(arr) {
    return arr.map(({id, name}) => `<option value=${id}>${name}</option>`)
}

function onBreedsList(evt) {

     
    const breedId = evt.srcElement.value

    

    fetchCatByBreed(breedId).then(data => catInfoImg.innerHTML = createImg(data))
        .catch(err => {
            error.classList.remove("is-hidden");
            breedsList.classList.add("is-hidden");
            
        })
        .finally(() => {
            loading.classList.add("is-hidden");
            breedsList.classList.remove("is-hidden");
            catInfo.classList.remove("is-hidden");
        });
    fetchBreeds().then(data => catInfoText.innerHTML = createMarkup(data, breedId))
        .catch(err => {
            error.classList.remove("is-hidden");
            breedsList.classList.add("is-hidden");
            
            
        })
        .finally(() => {
            loading.classList.add("is-hidden");
            breedsList.classList.remove("is-hidden");
            catInfo.classList.remove("is-hidden");    
        });
    
}

function createImg(arr) {
    return arr.map(({url}) => `<img src="${url}" alt="" width="240">`).join("");
}


function createMarkup(arr, value) {
    
    const catInfoObj = arr.find(({id}) => id === value)
    
    
    
    
    return (`<h2 class="title">${catInfoObj.name}</h2>
      <p>${catInfoObj.description}</p>
      <h3 class="subtitle">Temperament</h3>
      <p>${catInfoObj.temperament}</p>`);

    
}

