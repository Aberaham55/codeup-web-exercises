// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
// mapboxgl.accessToken = MAPBOX_API_KEY;
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
//     style: 'mapbox://styles/mapbox/streets-v12', // style URL
//     center: [-74.5, 40], // starting position [lng, lat]
//     zoom: 9 // starting zoom
// });







fetch(`https://api.openweathermap.org/data/2.5/weather?` +
    `lat=29.426825118534886&lon=-98.48948239256946` + `&appid=${OPEN_WEATHER_API_KEY}&units=imperial`)
    .then( data => data.json())
    .then( currentWeather => console.log(currentWeather));


    // const weatherOutput = document.querySelector("#forecast");
    // const weatherData = document.querySelector("#insert-weather");
  fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
      `lat=29.426825118534886&lon=-98.48948239256946` +
      `&appid=${OPEN_WEATHER_API_KEY}` +
      `&units=imperial`)
      .then( data => data.json())
      .then( forecast => {
          console.log(forecast);
          forecast.list.forEach(weather => {
              const weekDays = dayOfWeekFromDayAbbreviated;
              const time = document.querySelector("#card-mon h2");
              time.innerText = weekDays(weather.dt);
              const temp = document.querySelector("#card-mon h3");
              temp.innerText = "Temp:"+ " " + weather.main.temp;
              const windSpeed = document.querySelector("#card-mon h6").nextElementSibling;
              windSpeed.innerText = "Wind-Speed:" + " " + weather.wind.speed;
              const feelsLike = document.querySelector("#card-mon h6");
              feelsLike.innerText = "Feels Like" + " " +  weather.main.feels_like;
              const humidity = document.querySelector("#card-mon span");
              humidity.innerText = "Humidity" + " " +  weather.main.humidity;

              // weatherOutput.appendChild(windSpeed);
              // weatherOutput.appendChild(time);
              // weatherData.appendChild(temp);
          })
      });
  geocode("San Antonio, TX", MAPBOX_API_KEY).then(location => {
      console.log(location);
      map.setCenter(location);
      map.setZoom(10);
      const marker = new mapboxgl.Marker()
          .setLngLat([-98.4916, 29.4260])
          .addTo(map);
      const Popup = new mapboxgl.Popup()


      marker.setPopup(Popup);
  });


