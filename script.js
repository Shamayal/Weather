function getWeather() {
  const city = document.getElementById('city').value;

  if (!city) {
    alert('Please enter a city');
    return;
  }

  const latitude = 0;
  const longitude = 0;

  const currentWeatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weathercode`;

  const forecastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode`;

  
  fetch (currentWeatherUrl)
    .then(response => response.json())
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      console.error('Error fetching current weather data:', error);
      alert('Error fetching current weather data. Please try again.');
    });

  fetch (forecastUrl)
    .then(response => response.json())
    .then(data => {
      displayHourlyForecast(data.list);
    })
    .catch(error => {
      console.error('Error fetching hourly forecast data:', error);
      alert('Error fetching hourly forecast data. Please try again.');
    });
}

function displayWeather(data) {
  const tempDivInfo = document.getElementById('temp-div');
  const weatherInfoDiv = document.getElementById('weather-info');
  const weatherIcon = document.getElementById('weather-icon');
  const hourlyForecastDiv = document.getElementById('hourly-forecast');
}

function displayHourlyForecast(hourlyData) {
  
}