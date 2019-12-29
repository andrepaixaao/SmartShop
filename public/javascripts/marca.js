window.onload=function(){
    var campoUtilizador=document.getElementById("textUtilizador");
    campoUtilizador.innerHTML="<p class='Util'>Utilizador: <br>"+sessionStorage.getItem('Utilizador')+"</p>";
        var tabela = document.getElementById("wrapper");
$.ajax({
    url:"api/marca/"+sessionStorage.getItem('Marca'),
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
        var html = "";
        for(i in res)  {
            console.log(res[i]);
            html += "<div class=box b>"+"<img src='"+res[i].imagemProduto+"'>" + res[i].nomeProduto +"<input type='button'  value='Adicionar ao Carrinho' id='"+res[i].idProduto+"' onclick='addCarrinho("+res[i].idProduto+")'> <input type='button' value='Ver Produto' id='"+res[i].idProduto+"' onclick=''></div>";           

        }
        tabela.innerHTML = html;
    },
    error: function(jqXHR, errStr, errThrown) {  
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

function checkUtilizador()
{
    var utilizador=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    $.ajax({
        url: "/api/utilizador",
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

    function addCarrinho(idProduto)
{
    $.ajax({
        url:"/api/produtos/addProdutos",
        method : "post",
        contentType : "application/json",
        data : JSON.stringify({
            produto:idProduto,
            username: sessionStorage.getItem('Utilizador'),
            }),
        
        success: function(res, status){ 
          //
        }
        
        , error : function() { alert(JSON.stringify('error')); }
        
        });
    }

    
function Pesquisar()
{
    console.log("entrei");
    var pesquisa=document.getElementById("pesquisa").value;
    sessionStorage.setItem("Procura",pesquisa);
    window.location.href='/Procura';
}