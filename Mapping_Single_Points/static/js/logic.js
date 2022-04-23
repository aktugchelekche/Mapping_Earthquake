// Add console.log to check to see if our code is working.
console.log("working") ; 


let coordinates = [40.7, -94.5] ;
let map= L.map("mapid").setView(coordinates,5
    ) ;


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',
 {attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// coordinates_marker = [34.0522, -118.2437] ;
// //Adding Marker to the map
// let marker = L.marker(coordinates_marker).addTo(map) ; 

// Adding circle marker to the map 
// let circle_map = L.circle(coordinates_marker,{ 
//     radius :100 
//  }) ;

//  circle_map.addTo(map) ;

L.circleMarker([34.0522, -118.2437], {

    radius: 300 , 
    color :"red" ,
    fillColor : "#ffffa1"
 }).addTo(map);


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
