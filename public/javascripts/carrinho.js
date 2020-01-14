$(window).on('load', function () {
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

});

function nomeLista()
{
    var id;
    var nomeL=document.getElementById("nomelista").value;
    $.ajax({
        url:"/api/utilizador/addLista",
        method : "post",
        contentType : "application/json",
        data : JSON.stringify({
            nome:nomeL,
            username: sessionStorage.getItem('Utilizador'),
            }),
        
        success: function(res, status){ 
        $.ajax({
            url:"/api/utilizador/idLista",
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
                    url:"/api/utilizador/addProdutosLista",
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

