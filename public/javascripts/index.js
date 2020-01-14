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

   