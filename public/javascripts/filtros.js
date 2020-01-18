$(window).on('load', function () {
    var tabela = document.getElementById("wrapper");
$.ajax({
    url:"api/produtos/filtros/categoria/"+sessionStorage.getItem('Opcao'),
    method:"get",
    contentType:"application/json",
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
});