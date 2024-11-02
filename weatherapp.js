async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '8d797271306a676189c3288261e36147';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherInfo = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weather-info').innerHTML = weatherInfo;
        } else {
            document.getElementById('weather-info').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        document.getElementById('weather-info').innerHTML = `<p>Failed to get weather data.</p>`;
    }
}
