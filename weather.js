const API_KEY = "cac2be88c72fea9d04ba9cc84305aa51";
const COORDS = 'coords';

function getWeather(lat, lng) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).
    then(function (response) {
      return response.json();
    });

}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj) );
}

function handleGeoSuccess(position) {
  const latitude =position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude)
}

function handleGeoError() {
  console.log("Can't access geolocation");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords =localStorage.getItem
  (COORDS);
  if(loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords =JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
    console.log(parsedCoords);
  }
  }


function init() {
  loadCoords();
}

init();
