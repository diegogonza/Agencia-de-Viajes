const URL_COUNTRY = 'https://restcountries.eu/rest/v2/all'

fetch(URL_COUNTRY)
    .then( response => response.json())
    .then( data => showCountries(data))    
    .then( error => console.log(error))

const showCountries = (data) => {
    let countries = ''
    for (let i = 0; i < data.length; i++) {
        if (data[i].region === 'Asia') {
            countries += 
                `<div class="countries-content">
                    <div class="countries-head">
                        <img src="${data[i].flag}" alt="bandera de ${data[i].name}">
                    </div>
                    <div class="countries-body">
                        <h2>${data[i].name}</h2>
                        <p>Capital: ${data[i].capital}</p>
                        <p>Población: ${data[i].population}</p>
                    </div>
                </div>`
            }
        }
        document.getElementById('countries').innerHTML = countries
    }
