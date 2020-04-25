
var google;

function init() {
    var myLatlng = new google.maps.LatLng( 59.334591, 18.063240);   
    var mapOptions = {
        
        zoom: 7,
        center: myLatlng,
        scrollwheel: false,
        
    };


    var mapElement = document.getElementById('map');

   
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['Stockholm'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/loc.png'
            });

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);