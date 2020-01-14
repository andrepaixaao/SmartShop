$(window).on('load', function () {
{
  var campoUtilizador=document.getElementById("textUtilizador");
    campoUtilizador.innerHTML="<p class='Util'>Utilizador: <br>"+sessionStorage.getItem('Utilizador')+"</p>";
    var tabela=document.getElementById("MListas");
    $.ajax({
        url:"/api/utilizador/MinhasListas/"+sessionStorage.getItem('Utilizador'),
        method:"get",   
        // sending in json
        contentType:"application/json",
        success: function(res) {
            if (res.err) {
                console.log(JSON.stringify(res));
                return;
            }
            var html = "<tr><th>Nome Lista</th><th>Abrir</th><th>Usar lista </th></tr>";
            for(i in res)  {
                html += "<tr><td>"+res[i].nomeLista+"</td><td><input id='opcao' type='button' value='Ver / Partilhar Lista' onclick='verlista("+res[i].idLista+")'></td><td><input id='opcao' type='button' value='Usar Lista' onclick='usarlista("+res[i].idLista+")'></td></tr>";

            }
            tabela.innerHTML = html;
        },
        error: function(jqXHR, errStr, errThrown) {
            console.log("mas estou aqui");  
            console.log(errStr);
        }   
    })
}
});

function verlista(numero)
{
    sessionStorage.setItem("ListaNumero",numero);
    window.location.href='/Lista';
}


function usarlista(numero)
{
 
  $.ajax({
    url:"/api/utilizador/ApagarCarrinho/"+sessionStorage.getItem('Utilizador'),
    method:"get",   
    // sending in json
    contentType:"application/json",
    success: function(res) {
        if (res.err) {
            console.log(JSON.stringify(res));
            return;
        }
        $.ajax({
          url:"/api/utilizador/UsarLista",
          method : "post",
          contentType : "application/json",
          data : JSON.stringify({
              idLista:numero,
              username: sessionStorage.getItem('Utilizador'),
              }),
          
          success: function(res, status){ 
              
          }
          
          , error : function() { alert(JSON.stringify('error')); }
          
          });

    },
    error: function(jqXHR, errStr, errThrown) {
        console.log("mas estou aqui");  
        console.log(errStr);
    }   
})
    
        
    }