const apiKey = API_KEY;

const cityInput = document.querySelector('.city-input');
const searchButton = document.querySelector('.search-btn');

const weatherInfoSection = document.querySelector('.weather-info');
const notFoundSection = document.querySelector('.not-found');
const searchCitySection = document.querySelector('.search-city');

const cityTxt = document.querySelector('city-txt');
const tempTxt = document.querySelector('temp-txt');
const conditionTxt = document.querySelector('condition-txt');
const humidityValueTxt = document.querySelector('humidity-value-txt');
const windValueTxt = document.querySelector('wind-value-txt');
const weatherSummaryImg = document.querySelector('weather-summary-img');
const currentDateTxt = document.querySelector('current-date-txt');

searchButton.addEventListener('click', () => {
  if (cityInput.value.trim() != '') {
    updateWeatherInfo(cityInput.value);
    cityInput.value = '';
    cityInput.blur();
  }
})

cityInput.addEventListener('keydown', (event) => {
  if (event.key == 'Enter' && cityInput.value.trim() != '') {
    updateWeatherInfo(cityInput.value);
    cityInput.value = '';
    cityInput.blur();
  }
})

async function fetchData(endPoint, city) {
  const apiURl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiURl);
  return response.json();
}

async function updateWeatherInfo(city) {
  const weatherData = await fetchData('weather', city);
  
  if (weatherData.cod !== 200) {
    showDisplaySection(notFoundSection);
    return;
  }
  console.log(weatherData)

  const {
    name: country,
    main: {temp, humidity},
    weather: [{id, main}],
    wind: {speed}
  } = weatherData

  cityTxt.textContent = country
  tempTxt.textContent = temp + ' °C'

  showDisplaySection(weatherInfoSection);
}

function showDisplaySection(section) {
  [weatherInfoSection, searchCitySection, notFoundSection].forEach(section => section.style.display = 'none')

  section.style.display = 'flex';
}
