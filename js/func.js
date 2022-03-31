function vibrate_sos() {
    navigator.vibrate([300,100,300,100,300,100,600,100,600,100,600,100,300,100,300,100,300]);
}
  
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 16)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
        .bindPopup('You are here!')
        .openPopup();

}