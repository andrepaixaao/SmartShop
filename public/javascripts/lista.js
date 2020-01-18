$(window).on('load', function () {
    var tabela=document.getElementById("Lista");
    $.ajax({
        url:"/api/utilizador/lista/VerLista/"+sessionStorage.getItem('ListaNumero'),
        method:"get",   
        // sending in json
        contentType:"application/json",
        success: function(res) {
            console.log("Entrei aqui");
            if (res.err) {
                console.log(JSON.stringify(res));
                return;
            }
            var html = "<tr><th>Artigo</th><th>Quantidade</th><th>Preço Médio dos Artigo</th><th>Preco Total</th></tr>";
            for(i in res)  {
                html += "<tr><td>"+res[i].nomeProduto+"</td><td>"+res[i].quantidade+"</td><td>"+res[i].preco+" € </td><td>"+res[i].precototal+" € </td><td></tr>";

            }
            tabela.innerHTML = html;
        },
        error: function(jqXHR, errStr, errThrown) {
            console.log("mas estou aqui");  
            console.log(errStr);
        }   
    })

});



function usarLista()
{
        $.ajax({
          url:"/api/utilizador/lista/UsarLista",
          method : "post",
          contentType : "application/json",
          data : JSON.stringify({
              idLista:sessionStorage.getItem('ListaNumero'),
              username: sessionStorage.getItem('Utilizador'),
              }),
          success: function(res, status){ 
            alert("O seu carrinho foi alterado");
            window.location='/perfil'
          }
          
          , error : function() { alert(JSON.stringify('error')); }
          
          });
}


function partilharLista()
{
    var utilizador=document.getElementById("nomeUtilizador").value;
    $.ajax({
        url:"/api/utilizador/lista/PartilharLista",
        method : "post",
        contentType : "application/json",
        data : JSON.stringify({
            idLista:sessionStorage.getItem('ListaNumero'),
            username: utilizador,
            }),
        success: function(res, status){ 
          
        }
        
        , error : function() {
             alert(JSON.stringify('Utilizador não existe ou a lista já está partilhada com este Utilizador')); }
        
        });
        document.getElementById("nomeUtilizador").value="";
        alert("Lista partilhada com sucesso");
}