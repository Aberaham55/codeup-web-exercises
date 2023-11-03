
mapboxgl.accessToken = MAPBOX_API_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    zoom: 10, // starting zoom
    center: [-98.4916, 29.4252] // [lng, lat]
});
let marker = new mapboxgl.Marker( {
    draggable: true
})
    .setLngLat([-98.48, 29.42])
    .addTo(map);

const onDragUpdateWeather = () => {
    const lngLat = marker.getLngLat();
    const [lng, lat] = Object.values(lngLat);
    // function get and loops
    console.log([lng, lat])
    forecastWeatherCards(lng,lat);
}// end of function onDragEnd

marker.on('dragend', onDragUpdateWeather);





const weatherCardsDiv = document.querySelector('#weatherCardsDiv');
    function forecastWeatherCards(lng, lat) {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`)
            .then(data => data.json())
            .then(currentWeather => {
                console.log(currentWeather);


                weatherCardsDiv.innerHTML = "";
                currentWeather.list.forEach((weather, index) => {


                    const date = dateFromTimeStamp(weather.dt);
                    const day = getDayNameByDate(weather.dt);
                    const temp = weather.main.temp;
                    const highTemp = weather.main.temp_max;
                    const lowTemp = weather.main.temp_min;
                    const description = weather.weather[0].description;
                    // const icon = weather.weather[0].icon;
                    const windSpeed = weather.wind.speed;
                    const feelsLike = weather.main.feels_like;


                    if (index % 8 === 0) {
                        const cardDiv = document.createElement("div");
                        cardDiv.classList.add('card');
                        cardDiv.innerHTML = `
                          <div class="card-body">
                          <h5 class="card-title">${day}, ${date}</h5>
                          <p class="main-temp">${temp}</p>    
                          <p class="card-text"> L: ${lowTemp}°F / H: ${highTemp}°F</p>
                          <p class="card-text"><small class="text-body-secondary">Feels Like: ${feelsLike}°F</small></p>
                          <p class="card-text">WS: ${windSpeed} mph</p>
                          <p class="card-text">${description}</p>
                      </div>
                  
                  `;

                        weatherCardsDiv.appendChild(cardDiv);
                    }
                })
            })} forecastWeatherCards();













