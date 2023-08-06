import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_s5HaeA4yau3sUEqEWEjLHkqxQulHzNjzVLCDJyEL4xfK5L1hnvvjDyTlURUNIfde";

// import SlimSelect from 'slim-select';
// import 'slim-select/dist/slimselect.css';
// new SlimSelect({
//     select: '#selectElement'
//   })

function fetchBreeds() {
    const breedsList = document.querySelector('.breed-select');
    const loading = document.querySelector('.loader');
    const catInfo = document.querySelector('.cat-info');
    
    loading.classList.remove("is-hidden");
    breedsList.classList.add("is-hidden");
    catInfo.classList.add("is-hidden");


  

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


function fetchCatByBreed(breedId) {
    
    
    

    
    const BASE_URL = 'https://api.thecatapi.com/v1'

return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`)
.then(resp => {
    if (!resp.ok) {
        throw new Error(error.textContent);
    }
    return resp.json();
})
    
}

export {fetchCatByBreed, fetchBreeds}