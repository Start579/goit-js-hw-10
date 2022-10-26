import './css/styles.css';
import { Notify } from "notiflix/build/notiflix-notify-aio";

const DEBOUNCE_DELAY = 300;
const searchCountry = document.querySelector('.search-box');

searchCountry.addEventListener('DEBOUNCE_DELAY', onSearch);

function fetchCountry(countryId) {
return fetch(`https://restcountries.com/v3.1/name/${countryId}`).then(response => {
    return response.json
})
}

function onSearch(e) {
e.preventDefault();

fetchCountry ()
.then(renderCountry)
.catch(error => Notify.failure(`❌ I Don't find this country`));
}


function renderCountry (country) {
    const markup = inputCountry(country);
    inputCountry.innerHTML = markup;
}