const apiKey = API_KEY;

const cityInput = document.querySelector('.city-input');
const searchButton = document.querySelector('.search-btn');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
  if (cityInput.value.trim() != '') {
    getWeather(cityInput.value);
    cityInput.value = '';
    cityInput.blur();
  }
})

cityInput.addEventListener('keydown', (event) => {
  if (event.key == 'Enter' && cityInput.value.trim() != '') {
    getWeather(cityInput.value);
    cityInput.value = '';
    cityInput.blur();
  }
})

async function fetchData(endPoint, city) {
  const apiURl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}`;
  const response = await fetch(apiURl);
  return response.json();
}

async function getWeather(city) {
  const weatherData = await fetchData('weather', city);
  console.log(weatherData);
  // fetch(`/weather?city=${city}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     locationElement.textContent = data.name;
  //     temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
  //     descriptionElement.textContent = data.weather[0].description;
  //     humidityElement.textContent = `${data.main.humidity}%`;
  //   })
  //   .catch(error => {
  //     console.error('Error fetching weather data:', error);
  //   });
}
