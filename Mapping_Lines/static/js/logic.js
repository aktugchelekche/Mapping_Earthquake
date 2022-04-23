// Add console.log to check to see if our code is working.
console.log("working") ; 


let map= L.map("mapid").setView([37.6213, -122.3790], 5) ;


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',
 {attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Create a polyline using the line coordinates and make the line red.
let polyline = L.polyline(line, {
    color: "red", 
    opacity : 0.5 , 
    weight: '3',
    dashArray: '20, 20',
     dashOffset: '20'
  }).addTo(map);
map.fitBounds(polyline.getBounds());
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);