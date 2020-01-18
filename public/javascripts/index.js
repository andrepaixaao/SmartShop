window.onload = function () {
    navigator.geolocation.getCurrentPosition(getPosition);

  }

  function getPosition(position) {
    //L.marker(position.coords.latitude, position.coords.longitude)
    sessionStorage.setItem("lat",position.coords.latitude);
    sessionStorage.setItem("long",position.coords.longitude);

    console.log(sessionStorage.getItem("long"));
    console.log(sessionStorage.getItem("lat"));
}

function checkUtilizador()
{
    var utilizador=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    $.ajax({
        url: "/api/utilizador/VerificarUser",
        method : "post",
        contentType : "application/json",
        data : JSON.stringify({ 
                username: utilizador,
                password: password,
            }),
        
        success: function(res, status){ 
            sessionStorage.setItem("Utilizador",utilizador);
            window.location.href='/Login';
          
          //
        }
        
        , error : function() { alert(JSON.stringify('error')); }
        
        });
    }

   