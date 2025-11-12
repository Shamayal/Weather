let apiKey = API_KEY;
const apiURl = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('city');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    getWeather(city);
  }
})

function getWeather(city) {
  fetch(`/weather?city=${city}`)
    .then(response => response.json())
    .then(data => {
      locationElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
      descriptionElement.textContent = data.weather[0].description;
      humidityElement.textContent = `${data.main.humidity}%`;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}
