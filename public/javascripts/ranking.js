$(window).on('load', function () {
    var campoUtilizador=document.getElementById("textUtilizador");
    campoUtilizador.innerHTML="<p class='Util'>Utilizador: <br>"+sessionStorage.getItem('Utilizador')+"</p>";
    var tabela=document.getElementById("Ranking");
    var rank=1;
    $.ajax({
        url:"/api/ranking/"+sessionStorage.getItem('Utilizador'),
        method:"get",   
        // sending in json
        contentType:"application/json",
        success: function(res) {
            console.log("Entrei aqui");
            if (res.err) {
                console.log(JSON.stringify(res));
                return;
            }
            var html = "<tr><th>Ranking</th><th>Supermercado</th><th>Preco Total</th></tr>";
            for(i in res)  {
                
                html += "<tr><td>"+rank+" º </td><td>"+res[i].nome+"</td><td>"+res[i].precoTotal+" € </td></tr>";
                rank++;

            }
            tabela.innerHTML = html;
        },
        error: function(jqXHR, errStr, errThrown) {
            console.log("mas estou aqui");  
            console.log(errStr);
        }   
    })
});