$(window).on('load', function () {
    var tabela=document.getElementById("Carrinho");
    $.ajax({
        url:"/api/utilizador/carrinho/"+sessionStorage.getItem('Utilizador'),
        method:"get",   
        // sending in json
        contentType:"application/json",
        success: function(res) {
            console.log("Entrei aqui");
            if (res.err) {
                console.log(JSON.stringify(res));
                return;
            }
            var html = "<tr><th>Artigo</th><th>Quantidade</th><th>Preço Médio</th><th>Preco Total</th><th></th><th></th><th></th><th></th></tr>";
            for(i in res)  {
                html += "<tr><td>"+res[i].nomeProduto+"</td><td>"+res[i].quantidade+"</td><td>"+res[i].preco+" € </td><td>"+res[i].precototal+" € </td><td><input id='opcao' type='button' value='Apagar 1 un.' onclick='apagarUn("+res[i].idProduto+")'></td><td><input id='opcao' type='button' value='Adicionar 1 Un.' onclick='addUn("+res[i].idProduto+")'></td><td><input id='opcao' type='button' value='Apagar Produto' onclick='apagarProd("+res[i].idProduto+")'></td><td></tr>";

            }
            tabela.innerHTML = html;
        },
        error: function(jqXHR, errStr, errThrown) {
            console.log("mas estou aqui");  
            console.log(errStr);
        }   
    })

});

function nomeLista()
{
    var id;
    var nomeL=document.getElementById("nomelista").value;
    $.ajax({
        url:"/api/utilizador/lista/addLista",
        method : "post",
        contentType : "application/json",
        data : JSON.stringify({
            nome:nomeL,
            username: sessionStorage.getItem('Utilizador'),
            }),
        
        success: function(res, status){ 
        $.ajax({
            url:"/api/utilizador/lista/idLista",
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
                id=res[0].id;
                $.ajax({
                    url:"/api/utilizador/lista/addProdutosLista",
                    method : "post",
                    contentType : "application/json",
                    data : JSON.stringify({
                        id:id,
                        username: sessionStorage.getItem('Utilizador'),
                        }),
                    })
                    document.getElementById("nomelista").value="";
            alert("Lista adicionada com sucesso");
            },
             
        })
    }
        });

    }

function addUn(idProduto)
{
    addCarrinho(idProduto);
    window.location.href='/Carrinho';
}

function apagarUn(idProduto)
{
$.ajax({
    url:"/api/utilizador/carrinho/apagarUnidade",
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

    window.location.href='/Carrinho';

}

function apagarProd(idProduto)
{
$.ajax({
    url:"/api/utilizador/carrinho/apagarProduto",
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

    window.location.href='/Carrinho';

}

function apagarCarrinho()
{

    $.ajax({
        url:"/api/utilizador/carrinho/ApagarCarrinho/"+sessionStorage.getItem('Utilizador'),
        method:"get",   
        // sending in json
        contentType:"application/json",
        success: function(res) {
            if (res.err) {
                console.log(JSON.stringify(res));
                return;
            }
 
        }   
    })
    window.location.href='/Carrinho';
}