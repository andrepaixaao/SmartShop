window.onload = function () {
    navigator.geolocation.getCurrentPosition(getPosition);
  }

  function getPosition(position) {
    sessionStorage.setItem("lat",position.coords.latitude);
    sessionStorage.setItem("long",position.coords.longitude);
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
          nomeUtilizador();
        }
        
        , error : function() { alert(JSON.stringify('error')); }
        
        });
    }


function nomeUtilizador()
{
$.ajax({
    url:"api/utilizador/nome/"+sessionStorage.getItem('Utilizador'),
    method:"get",
    contentType:"application/json",
    dataType:"json",
    success: function(res,status,jqXHR) {
        console.log(status);
        if (res.err) {
            console.log(JSON.stringify(res));
            return;
        }
        nome=res[0].nomeUtilizador;
        sessionStorage.setItem("Nome",nome);
        window.location.href='/Login';

    },
    error: function(jqXHR, errStr, errThrown) {  
        console.log(errStr);
    }
})
}