document.addEventListener("DOMContentLoaded", getMyLocation);

function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(DisplayLocation, displayError);
    var watchButton = document.getElementById("watch");
    watchButton.onclick = watchLocation;
    var claerWatchButton = document.getElementById("clearWatch");
    claerWatchButton.onclick = clearWatch;
  } else {
    alert("Oops, no geolocation support");
  }
}

function displayLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let div = document.getElementById("location");
  div.innerHTML = `You are at Latitude: ${latitude}, Longitude: ${longitude}`;
  div.innerHTML += `(with ${position.coords.accuracy} meters accuracy)`;
  let km = ComputerDistance(position.coords, ourCoords);
  let distane = document.getElementById("distane");
  distane.innerHTML = `You are ${km} km from the College`;
}

function displayError(error) {
  const errorType = {
    0: "Unknown error",
    1: "Permission denied by user",
    2: "Position is not available",
    3: "Request timed out",
  };
  const errorMessage = errorType[error.code];
  if (error.code == 0 || error.code == 2) {
    errorMessage = errorMessage + " " + error.message;
  }
  let div = document.getElementById("location");
  div.innerHTML = errorMessage;
}

function ComputerDistance(startCoords, destCoords) {
  let startLatRads = degreesToRadians(startCoords.latitude);
  let startLongRads = degreesToRadians(startCoords.longitude);
  let destLatRads = degreesToRadians(destCoords.longitude);
  let destLongRads = degreesToRadians(destCoords.latitude);
  let Radius = 6371; // km
  let distane =
    Math.acos(
      Math.sin(startLatRads) * Math.sin(destLatRads) +
        Math.cos(startLatRads) *
          Math.cos(destLatRads) *
          Math.cos(startLongRads - destLongRads)
    ) * Radius;
  return distane;
}

function watchLocation() {
  watchId = navigator.geolocation.watchPosition(displayLocation, displayError);
}
function clearWatch() {
  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
}
