    window.onload=function(){
    var tabela = document.getElementById("wrapper");
    $.ajax({
        url:"/api/produtos",
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
                html += "<div class=box b>"+"<img src='"+res[i].imagemProduto+"'>" + res[i].nomeProduto +"<input type='button'  value='Adicionar ao Carrinho' id='"+res[i].idProduto+"' onclick=''> <input type='button' value='Ver Produto' id='"+res[i].idProduto+"' onclick=''></div>";           

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
            var html="<li><a href='Login'>Inicio</a></li><li><a href='#'>Supermercados</a><ul><li><a href='#'>Continente</a></li><li><a href='#'>Pingo Doce</a></li><li><a href='#'>Aldi</a></li><li><a href='#'>Lidl</a></li><li><a href='#'>Intermache</a></li></ul></li><li><a href='Login'>Produtos</a><ul>";
            for(i in res)  {
                console.log("resultado="+res[i]);
                html += "<li><a href='/api/produtos/"+res[i].idTipoProduto+"'>"+res[i].nomeTipo+"</a></li>";

            }
            html+= "</ul>";
            dropmenu.innerHTML = html;
        },
        error: function(jqXHR, errStr, errThrown) {  
            console.log(errStr);
        }
    })

    /*
    $.ajax({
        url:"/api/produtos/:id",
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
                html += "<div class=box b>"+"<img src='"+res[i].imagemProduto+"'>" + res[i].nomeProduto +"<input type='button'  value='Adicionar ao Carrinho' id='"+res[i].idProduto+"' onclick=''> <input type='button' value='Ver Produto' id='"+res[i].idProduto+"' onclick=''></div>";           

            }
            tabela.innerHTML = html;
        },
        error: function(jqXHR, errStr, errThrown) {  
            console.log(errStr);
        }
    })
    */

    

}


function checkUtilizador()
{
    console.log("oi galera");
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


