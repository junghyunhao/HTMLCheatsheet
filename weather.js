const COORDS = 'coords';

function handleGeoSuccess(position) {
  const latitude =position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObject = {
    latitude: latitude,
    longitude: longitude
  }
}

function handleGeoError() {
  console.log("Can't access geolocation");
}
function askForCoords() {
  navigator.geolocation.getCurrentPoition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCords =localStorage.getItem
  (COORDS);
  if(loadedCoords === null) {
    askForCoords();
  } else {
    //getWeather
  }
  }
}

function init() {
  loadCoords();
}

init();
