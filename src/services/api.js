export async function getWeather(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=5&appid=${process.env.REACT_APP_API_KEY}`
    );

    return response.json();
}