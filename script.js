// GET request by Country name
function getCountryByName() {
  const countryName = document.getElementById("country-name").value;
  fetchCountryData(`https://restcountries.com/v3.1/name/${countryName}`);
}

// GET request by Capital name
function getCountryByCapital() {
  const countryCapital = document.getElementById("country-capital").value;
  fetchCountryData(`https://restcountries.com/v3.1/capital/${countryCapital}`);
}

// Fetch data from the API
function fetchCountryData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayCountryInfo(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Render Data to the page
function displayCountryInfo(countryData) {
  const countryInfoDiv = document.getElementById("country-info");
  countryInfoDiv.innerHTML = "";

  if (countryData.length === 0) {
    countryInfoDiv.innerHTML = "No country found.";
    countryInfoDiv.style.display = "block";
    return;
  }

  const country = countryData[0];
  const countryName = country.name.common;
  const countryCapital = country.capital[0];
  const countryPopulation = country.population;

  const infoText = `
    <h2>${countryName}</h2>
    <p>Capital: ${countryCapital}</p>
    <p>Population: ${countryPopulation}</p>
  `;

  countryInfoDiv.innerHTML = infoText;
  countryInfoDiv.style.display = "block";
}
