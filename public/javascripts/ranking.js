$(window).on('load', function () {
    var tabela=document.getElementById("Ranking");
    var rank=1;
    $.ajax({
        url:"/api/utilizador/carrinho/ranking/"+sessionStorage.getItem('Utilizador'),
        method:"get",   
        // sending in json
        contentType:"application/json",
        success: function(res) {
            console.log("Entrei aqui");
            if (res.err) {
                console.log(JSON.stringify(res));
                return;
            }
            var html = "<tr><th>Ranking</th><th>Supermercado</th><th>Preco Total</th><th></th></tr>";
            for(i in res)  {
                
                html += "<tr><td>"+rank+" º </td><td>"+res[i].nome+"</td><td>"+res[i].precoTotal+" € </td><td><input id='opcao' type='button' value='Obter Trajeto' onclick='vertrajeto("+res[i].idSupermercado+")'></td></tr>";
                rank++;

            }
            tabela.innerHTML = html;
        },
        error: function(jqXHR, errStr, errThrown) {
            console.log("mas estou aqui");  
            console.log(errStr);
        }   
    })
}
);


function vertrajeto(idSupermercado)
{
    sessionStorage.setItem('Supermercado',idSupermercado);
    window.location.href='/Trajeto';
}

function altDist()
{
    var rank1=1;
    var tabela=document.getElementById("RankingDistancia");
    var maxDist=document.getElementById("maxdist").value;
    $.ajax({
        url:"/api/utilizador/carrinho/ranking/distancia",
        method : "post",
        contentType : "application/json",
        data : JSON.stringify({
            maxdist:maxDist,
            lat:sessionStorage.getItem('lat'),
            long:sessionStorage.getItem('long'),
            }),
        success: function(res, status){ 
            var html = "<tr><th>Ranking</th><th>Supermercado</th><th>Distancia</th></tr>";
            for(i in res)  {
                
                html += "<tr><td>"+rank1+" º </td><td>"+res[i].nomeMercado+"</td><td>"+res[i].distancia+" km</td></tr>";
                rank1++;

            }
            tabela.innerHTML = html;
        }
        
        , error : function() {
             alert(JSON.stringify('Utilizador não existe ou a lista já está partilhada com este Utilizador')); }
        
        });
}

