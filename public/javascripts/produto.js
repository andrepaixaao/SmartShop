$(window).on('load', function () {
    var tabela = document.getElementById("produto");
    $.ajax({
        url:"api/produtos/vistadetalhada/"+sessionStorage.getItem('idProduto'),
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
                html += "<img src='"+res[i].imagemProduto+"'></br><b>" + res[i].nomeProduto +"</b></br><b>Preco médio:"+res[i].preco+" €</b></br>"+res[i].descricaoProduto+"</br><input type='button'  value='Adicionar ao Carrinho' id='"+res[i].idProduto+"' onclick='addCarrinho("+res[i].idProduto+")'></div>";           
    
            }
            tabela.innerHTML = html;
            var tabela1 = document.getElementById("nav-container");
    $.ajax({
        url:"api/produtos/vistadetalhada/sugestao/"+sessionStorage.getItem('idProduto'),
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
                html += "<a href='#' onclick='verProd("+res[i].idProduto+")' class='nav-item'><img src='"+res[i].imagemProduto+"'></a>                ";           
    
            }
            tabela1.innerHTML = html;
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