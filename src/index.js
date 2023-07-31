import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_s5HaeA4yau3sUEqEWEjLHkqxQulHzNjzVLCDJyEL4xfK5L1hnvvjDyTlURUNIfde";

import { fetchCatByBreed } from "./cat-api";





const breedsList = document.querySelector('.breed-select');
const loading = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

breedsList.addEventListener('change', onBreedsList);








function getBreeds() {
    
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const API_KEY = "x-api-key";

    return fetch(`${BASE_URL}/breeds?API_key=${API_KEY}`)
    .then(resp => {
        if (!resp.ok){
            throw new Error(error.textContent);
        }
        return resp.json();
    })
}

getBreeds().then(data => breedsList.innerHTML = createSelectList(data)).catch(err => error.textContent);

function createSelectList(arr) {
    return arr.map(({id, name}) => `<option value=${id}>${name}</option>`)
}

function onBreedsList(evt) {
    const breedId = evt.srcElement.value

    fetchCatByBreed(breedId).then(data => console.log(data)).catch(err => error.textContent);
    console.log(breedId);
    
}


// function createMarkup(arr) {
//     return arr.map(({id, name, temperament, description, }) => ` 
//     <div class="image"><img src="" alt=""></div>
//     <div class="info">
//       <h2 class="title"></h2>
//       <p></p>
//       <h3 class="subtitle">Temperament</h3>
//       <p></p>
//     </div>`).join("");
    
// }