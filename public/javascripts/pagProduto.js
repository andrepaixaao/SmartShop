window.onload = function() {
    var imgprod = document.getElementById("imagemProd");
    $.ajax({
        url: "/api/pagProduto/:id",
        method: "get",
        // sending in json
        contentType: "application/json",
        // receiving in json
        dataType: "json",
        success: function(res, status, jqXHR) {
            console.log(status);
            if (res.err) {
                console.log(JSON.stringify(res));
                return;
            }
            var html = "";
            html = "<div><img src='" + res.imagemProduto + "'></div>";
            imgprod.innerHTML = html;

        },
        error: function(jqXHR, errStr, errThrown) {
            console.log("mas estou aqui, muchacho");
            console.log(errStr);
        }
    })

    var infoprod = document.getElementById("infoProd");
    $.ajax({
        url: "/api/pagProduto/:id",
        method: "get",
        // sending in json
        contentType: "application/json",
        // receiving in json
        dataType: "json",
        success: function(res, status, jqXHR) {
            console.log(status);
            if (res.err) {
                console.log(JSON.stringify(res));
                return;
            }
            var html = "";
            // que condição coloco aqui para se o id for o do prod, apresentar a info abaixo?
            html = "<div> <h1>" + res.nomeProduto + "</h1> <h2>" + res.descricaoProduto + "</h2> <h3>" + res.idProduto + "</h3></div>";
            infoprod.innerHTML = html;
        },
        error: function(jqXHR, errStr, errThrown) {
            console.log("mas estou aqui, muchacho");
            console.log(errStr);
        }
    })

    var sugest = document.getElementById("sugestoes");
    $.ajax({
        url: "/api/pagProduto/:id",
        method: "get",
        // sending in json
        contentType: "application/json",
        // receiving in json
        dataType: "json",
        success: function(res, status, jqXHR) {
            console.log(status);
            if (res.err) {
                console.log(JSON.stringify(res));
                return;
            }
            var html = "";
            for (i in res) {
                console.log(res[i]); //verif
                html = "<li></li>";
            }
            sugest.innerHTML = html;
        },
        error: function(jqXHR, errStr, errThrown) {
            console.log("mas estou aqui, muchacho");
            console.log(errStr);
        }
    })
}