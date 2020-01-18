$(document).ready(function(){
    produtosCarrinho();
    var campoUtilizador=document.getElementById("textUtilizador");
    campoUtilizador.innerHTML="<p class='Util'>Utilizador: <br>"+sessionStorage.getItem('Utilizador')+"</p>";
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
                    html+= "</ul><li><a href='Perfil'>Perfil</a>";
                    dropmenu.innerHTML += html;
                },
                error: function(jqXHR, errStr, errThrown) {  
                    console.log(errStr);
                }
            })
        },
        error: function(jqXHR, errStr, errThrown) {  
            console.log(errStr);
        }
    })
   
});

function filtro(valor)
{
   sessionStorage.setItem("Opcao",valor);
}
function marca(valor)
{
    sessionStorage.setItem("Marca",valor);
}
function addCarrinho(idProduto)
{
    console.log(idProduto);
    console.log(sessionStorage.getItem('Utilizador'));
    console.log("entrei");
    $.ajax({
        url:"/api/utilizador/carrinho/addProdutos",
        method : "post",
        contentType : "application/json",
        data : JSON.stringify({
            produto:idProduto,
            username: sessionStorage.getItem('Utilizador'),
            }),
        
        success: function(res, status){ 
            var popup = document.getElementById("myPopup");
            popup.classList.toggle("show");
        }
        
        , error : function() { alert(JSON.stringify('error')); }
        
        });
    
        produtosCarrinho();
    }
function Pesquisar()
{
    var pesquisa=document.getElementById("pesquisa").value;
    sessionStorage.setItem("Procura",pesquisa);
    window.location.href='/Procura';
}

function produtosCarrinho()
{
    $.ajax({
        url:"api/utilizador/carrinho/contarProdutos/"+sessionStorage.getItem('Utilizador'),
        method:"get",
        contentType:"application/json",
        dataType:"json",
        success: function(res,status,jqXHR) {
            console.log(status);
            if (res.err) {
                console.log(JSON.stringify(res));
                return;
            }
            var campoCarrinho=document.getElementById("textCarrinho");
            campoCarrinho.innerHTML="<p class='Carrinho'>Produtos no carrinho: "+res[0].contagem+"</p>";
        },
        error: function(jqXHR, errStr, errThrown) {  
            console.log(errStr);
        }
    })
}

