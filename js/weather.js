const API_KEY = "3add37b047808d5df302e7db1bb260f7";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = 
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            console.log(weather);
            console.log(city);

            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        });

}

function onGeoError() {
    alert("can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);