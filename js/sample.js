mapboxgl.accessToken = MAPBOX_API_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
    center: [-98.48, 29.42], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

let marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.48, 29.42])
    .addTo(map);


const onDragUpdateWeather = () => {
    const lngLat = marker.getLngLat();
    const [lng, lat] = Object.values(lngLat);
    // function get and loops
    getForecastForCards(lng, lat);
    todayWeather(lng, lat)
    console.log([lng, lat])
}// end of function onDragEnd

marker.on('dragend', onDragUpdateWeather);


///CURRENT WEATHER////
function todayWeather (lng = -98.48948239256946, lat = 29.426825118534886) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?` +
        `lat=${lat}&lon=${lng}` +
        `&appid=${OPEN_WEATHER_API_KEY}` +
        `&units=imperial`)
        .then(data => data.json())
        .then(currentWeather => {
            console.log(currentWeather)
            todayWeatherCard(currentWeather)
        })
}
todayWeather()

const todayCarDiv = document.querySelector("#current-weather-container")
function todayWeatherCard(currentWeather){
    todayCarDiv.innerHTML = '';//resets cards after each input

    const todayCard = document.createElement('div');
    todayCard.classList.add('card');
    todayCard.innerHTML = `
    <div class="card-body">
    <h5 class="card-title">Today's Weather</h5>
    <div class="card-text">${currentWeather.name}</div>
    <p class="card-text"><img src=" https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png"alt="...">${currentWeather.main.temp} Degrees</p>
    <div class="card-text">${currentWeather.weather[0].description}</div>
  </div>
 
  `
    todayCarDiv.appendChild(todayCard)
}

function prettyDate (dateString){
    const dt = new Date(dateString + "T12:00:00");
    return dt.toDateString()
    //console.log(dt.toDateString())
}


// ///FORECAST CARDS////
const weatherCardsDiv = document.querySelector("#forecast");
function getForecastForCards(lng = -98.48948239256946, lat = 29.426825118534886){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
        `lat=${lat}&lon=${lng}` +
        `&appid=${OPEN_WEATHER_API_KEY}` +
        `&units=imperial`)
        .then(data => data.json())
        .then(forecast => {
            console.log(forecast)
            createCards(forecast)
        });
}

getForecastForCards();

function createCards(forecast) {
    weatherCardsDiv.innerHTML = '';//resets cards after each input


    let weather = [];
    for (let i = 0; i < forecast.list.length; i+=8) {
        weather.push(forecast.list[i]);
    }

    weather.forEach(weather => {
        let datePart = weather.dt_txt.split(' ')[0];
        const weatherCard = document.createElement('div');
        weatherCard.classList.add('card');
        weatherCard.classList.add('col');
        weatherCard.innerHTML = `
    <div class="card-header">${prettyDate(datePart)}</div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">
    <img src=" https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"alt="...">
     ${weather.main.temp} Degrees.</li>
    <li class="list-group-item">Description: ${weather.weather[0].description}</li>
    <li class="list-group-item">Humidity: ${weather.main.humidity}</li>
    <li class="list-group-item">Wind: ${weather.wind.speed}</li>
    <li class="list-group-item">Pressure: ${weather.main.pressure}</li>
    </ul>
       `;
        weatherCardsDiv.appendChild(weatherCard);
    });
}

//////  INPUT AND SEARCH BUTTON /////
const placeButton = document.querySelector("#find-place-btn")
placeButton.addEventListener("click", function (event){
    event.preventDefault()
    const userInput = document.querySelector("#input-place").value
    console.log(userInput)
    geocode(userInput, MAPBOX_API_KEY)
        .then(lngLat => {
            map.setCenter(lngLat);
            map.setZoom(10);

            const lngLatObj = {
                lng: lngLat[0],
                lat: lngLat[1]
            };
            console.log(lngLatObj)
            if (marker) {
                // Move the existing marker to the new location
                marker.setLngLat([lngLatObj.lng, lngLatObj.lat]);
            } else {
                // Create a new marker if it doesn't exist
                marker = new mapboxgl.Marker()
                    .setLngLat([lngLatObj.lng, lngLatObj.lat])
                    .addTo(map);
            }
            getForecastForCards(lngLatObj.lng, lngLatObj.lat)
            todayWeather(lngLatObj.lng, lngLatObj.lat)
        })
})


























