// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level. setView parameter lat, long and zoom level on scale ( 0-18)
let map = L.map('mapid').setView([34.0522, -118.2437], 14);


//  Add a marker to the map for Los Angeles, California.
let marker = L.circleMarker([34.0522, -118.2437], {
    radius: 100,
    color : "orange",
    lineweight : 4,
    fillcolor : "#ffffa1"
 }).addTo(map);


 // We create the tile layer that will be the background of our map. For dark, use dark-v10
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.

streets.addTo(map);