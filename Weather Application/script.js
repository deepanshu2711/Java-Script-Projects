const inputText = document.getElementById("input-text")

const form = document.getElementById("form")

let main;
let temp;
let humidity;
let windSpeed;
let loc;

form.onsubmit = async (event) => {
    event.preventDefault();
    await getWeatherdata();
    showWeatherdata(main, temp, humidity, windSpeed, loc);
}

async function getWeatherdata() {
    if (!inputText.value) {
        return null;
    }
    try {
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputText.value}&appid=<Your Api Key Here>`);
        const data = await responce.json();

        console.log(data.name)

        loc = data.name
        main = data.weather[0].main
        if (main == "Haze" || main == "Smoke") {
            main = "Clouds"
        }
        temp = data.main.temp
        humidity = data.main.humidity
        windSpeed = data.wind.speed
    } catch (error) {
        console.log("Not able to fetch data", error)
    }
}

function showWeatherdata(main, temp, humidity, windSpeed, location) {
    const WeatherImage = document.getElementById("weather-image")
    const temprature = document.getElementById("temprature")
    const loca = document.getElementById("location");
    const windSpeedelement = document.getElementById("wind-speed");
    const humid = document.getElementById("humidity");

    const tempinCelcius = Math.round(temp - 273) - 1

    WeatherImage.src = `images/${main}.png`
    temprature.innerText = `${tempinCelcius}°C`
    loca.innerText = `${location}`;
    humid.innerText = `${humidity}%`
    windSpeedelement.innerText = `${windSpeed}km/h`
}