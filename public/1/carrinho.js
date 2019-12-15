window.onload=function(){
    var campoUtilizador=document.getElementById("textUtilizador");
    campoUtilizador.innerHTML="<p class='Util'>Utilizador: <br>"+sessionStorage.getItem('Utilizador')+"</p>";
    var tabela=document.getElementById("Carrinho");
    $.ajax({
        url:"/api/carrinho/"+sessionStorage.getItem('Utilizador'),
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
}