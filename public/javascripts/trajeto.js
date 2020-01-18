$(window).on('load', function () {
    var latS;
    var longS;
    var control;
var map = L.map('map').setView([sessionStorage.getItem('lat'), sessionStorage.getItem('long'),], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([sessionStorage.getItem('lat'), sessionStorage.getItem('long'),]).addTo(map)
    .bindPopup('A sua localização');

    $.ajax({
        url:"/api/utilizador/carrinho/ranking/trajeto",
        method : "post",
        contentType : "application/json",
        data : JSON.stringify({
            lat:sessionStorage.getItem('lat'),
            long:sessionStorage.getItem('long'),
            idSupermercado:sessionStorage.getItem('Supermercado')
            }),
        success: function(res, status){ 
            latS=res[0].lat;
            longS=res[0].lon;
            L.marker([latS, longS,]).addTo(map)
    .bindPopup('Supermercado Escolhido')
    .openPopup()
    control=L.Routing.control({
        waypoints: [
            L.latLng(sessionStorage.getItem('lat'),sessionStorage.getItem('long')),
            L.latLng(latS, longS)
        ],
    }).addTo(map);

            }
        , error : function() {
             alert(JSON.stringify('Utilizador não existe ou a lista já está partilhada com este Utilizador')); }
        
        });

});