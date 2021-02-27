var accessToken = 'pk.eyJ1IjoiZ3V5LWFyaWVsaSIsImEiOiJja2xkZ25zZHgwNGR6MnVwMG1xbTUxcTNyIn0.TOY-f2x1Ti9wD9DO42M4yQ';
var DEFUALT_LOCATION_ZOOM = 15;
var DEFUALT_LOCATION = [34.783333,32.066667];
// Get location form client
navigator.geolocation.getCurrentPosition( successLocationFunc,errorLocationFunc,{
    enableHighAccuracy: true,
} );

function successLocationFunc(position){
    console.log(position);
    setupMap([position.coords.longitude,position.coords.latitude]);
}

function errorLocationFunc(){
    setupMap(DEFUALT_LOCATION);
}

function setupMap(center){
    mapboxgl.accessToken = accessToken;
    const map = new mapboxgl.Map({ 
        container: 'map',
        style: 'mapbox://styles/guy-arieli/cklf90md83dnj17mihkzde5z3',
        center: center,
        zoom: DEFUALT_LOCATION_ZOOM,
    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
    });
    map.addControl(directions, 'top-left');

}




