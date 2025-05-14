async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const resultDiv = document.getElementById('weatherResult');

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  try {
    const response = await fetch(`/weather?city=${city}`);
    const data = await response.json();

    if (data.error) {
      resultDiv.innerHTML = "Error fetching weather data.";
      return;
    }

    resultDiv.innerHTML = `
      <h2>${data.name}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    `;
  } catch (err) {
    resultDiv.innerHTML = "Something went wrong.";
  }
}
