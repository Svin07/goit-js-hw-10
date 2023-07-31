import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_s5HaeA4yau3sUEqEWEjLHkqxQulHzNjzVLCDJyEL4xfK5L1hnvvjDyTlURUNIfde";


function fetchCatByBreed(breedId) {

    // https://api.thecatapi.com/v1/images/search?breed_ids=abys
    const BASE_URL = 'https://api.thecatapi.com/v1'

return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`)
.then(resp => {
    if (!resp.ok) {
        throw new Error(error.textContent);
    }
    return resp.json();
})
    
}

export {fetchCatByBreed}