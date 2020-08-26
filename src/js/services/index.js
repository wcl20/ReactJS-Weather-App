export const services = {
    getWeather,
    getForecast
}

// Insert API key
const apiKey = '';

function getWeather(latitude, longitude) {
    let url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.search = new URLSearchParams({
        lat: latitude,
        lon: longitude,
        units: 'metric',
        appid: apiKey
    });
    return fetch(url);
}

function getForecast(latitude, longitude) {
    let url = new URL("https://api.openweathermap.org/data/2.5/onecall");
    url.search = new URLSearchParams({
        lat: latitude,
        lon: longitude,
        exclude: "current,hourly,minutely",
        units: 'metric',
        appid: apiKey
    });
    return fetch(url);
}
