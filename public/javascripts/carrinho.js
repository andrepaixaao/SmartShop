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
    var dropmenu=document.getElementById("drop_menu");
    $.ajax({
        url:"/api/produtos/tipo",
        method:"get",
        // sending in json
        contentType:"application/json",
        // receiving in json
        dataType:"json",
        success: function(res,status,jqXHR) {
            console.log(status);
            if (res.err) {
                console.log(JSON.stringify(res));
                return;
            }
            var html="<li><a href='Login'>Inicio</a></li><li><a href='Login'>Produtos</a><ul>";
            for(i in res)  {
                html += "</span><li onclick='filtro("+res[i].idTipoProduto+")'><a href='filtros'>"+res[i].nomeTipo+"</a></li>";
            }
            html+= "</ul>";
            dropmenu.innerHTML = html;
        },
        error: function(jqXHR, errStr, errThrown) {  
            console.log(errStr);
        }
    })


    $.ajax({
        url:"/api/produtos/marca",
        method:"get",
        // sending in json
        contentType:"application/json",
        // receiving in json
        dataType:"json",
        success: function(res,status,jqXHR) {
            console.log(status);
            if (res.err) {
                console.log(JSON.stringify(res));
                return;
            }
            var html="<li><a href='Login'>Marca</a><ul>";
            for(i in res)  {
                html += "</span><li onclick='marca("+res[i].idMarcaProduto+")'><a href='marca'>"+res[i].marcaProduto+"</a></li>";
            }
            html+= "</ul>";
            dropmenu.innerHTML += html;
        },
        error: function(jqXHR, errStr, errThrown) {  
            console.log(errStr);
        }
    })
}


function filtro(valor)
{
   sessionStorage.setItem("Opcao",valor);
}

function marca(valor)
{
    sessionStorage.setItem("Marca",valor);
}

function Pesquisar()
{
    var pesquisa=document.getElementById("pesquisa").value;
    sessionStorage.setItem("Procura",pesquisa);
    window.location.href='/Procura';
}