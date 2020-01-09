var pool = require('./connection').pool;

module.exports.getUtilizadores = function(utilizador,callback, next) {
    pool.getConnection(function(err,conn){  
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        pool.query("select * from Utilizador where emailUtilizador=?",utilizador, function(err, results) {
            pool.releaseConnection;
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
            callback(false, {code: 200, status:"ok", data: results})
        })
       
    })

}

module.exports.newUtilizadores = function(utilizador,nome,password,callback, next) {
    pool.getConnection(function(err,conn){  
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        pool.query("insert into Utilizador(emailUtilizador,nomeUtilizador,passwordUtilizador) VALUES(?,?,?)",utilizador,nome,password, function(err, results) {
            pool.releaseConnection;
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
            callback(false, {code: 200, status:"ok", data: results})
        })
       
    })

}


module.exports.getItems = function (callback, next) {
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        conn.query("select * from Produto", function(err, results) {
            conn.release();
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
}



module.exports.verifyUser = function (data,cb, next) {
    
    pool.getConnection(function (err, conn) {
        if (err) {
            cb(err, { code: 500, status: "Error connecting to database." })
            return;
        }
        conn.query("SELECT emailUtilizador FROM Utilizador WHERE emailUtilizador = '"+ data.username +"' AND passwordUtilizador ='"+data.password+"';", function (err, results) {
            conn.release();
            if (err) {
                cb(err, { code: 500, status: "O Utilizador não existe ou a password está incorreta" })
                return;
            }
            if(results[0]==undefined)
            {
                cb(err, { code: 500, status: "O Utilizador não existe ou a password está incorreta" })
                return;
            }

            cb(false, { code: 200, status: "ok", data: results })
        })


    })
}

module.exports.addCarrinho = function (data,cb, next) {
    
    pool.getConnection(function (err, conn) {
        if (err) {
            cb(err, { code: 500, status: "Error connecting to database." })
            return;
        }
        conn.query("Insert into CarrinhoQuantidade (quantidade,emailUtilizador,idProduto) values ('1','"+data.username+"','"+data.produto+"');",function (err, results) {
            console.log(results);
            conn.release();
            
        })


    })
}

module.exports.registarUser = function (data,cb, next) {
    
    pool.getConnection(function (err, conn) {
        if (err) {
            cb(err, { code: 500, status: "Error connecting to database." })
            return;
        }
        console.log(data);
        conn.query("Insert into Utilizador(emailUtilizador,nomeUtilizador,passwordUtilizador) values ('"+data.email+"','"+data.nome+"','"+data.password+"');",function (err, results) {
            console.log(results);
            conn.release();
        })


    })
}




module.exports.getCarrinho = function (user,callback, next) {
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        conn.query("select Produto.idProduto,Produto.nomeProduto,CAST(SUM(CarrinhoQuantidade.quantidade/5)as decimal(10,0)) as quantidade,CAST(AVG(PrecoProduto.precoProduto)as decimal(10,2)) as preco,CAST(SUM(CarrinhoQuantidade.quantidade/5)as decimal(10,0))*CAST(AVG(PrecoProduto.precoProduto)as decimal(10,2)) as precototal from Produto left join CarrinhoQuantidade on CarrinhoQuantidade.idProduto=Produto.idProduto left join PrecoProduto on PrecoProduto.Produto_idProduto=Produto.idProduto where CarrinhoQuantidade.emailUtilizador='"+user+"'  GROUP by Produto.idProduto,Produto.nomeProduto,CarrinhoQuantidade.quantidade        ", function(err, results) {

            conn.release();
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
}


module.exports.getRanking = function (user,callback, next) {

    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        conn.query("select CAST(sum(preco) as decimal(10,2)) as precoTotal,nome,idSupermercado from( select idProduto as idProduto,nomeMercado as nome, Supermercado_idSupermercado as idSupermercado, SUM(precoProduto) as preco from CarrinhoQuantidade inner join PrecoProduto on CarrinhoQuantidade.idProduto = PrecoProduto.Produto_idProduto inner join Supermercado on PrecoProduto.Supermercado_idSupermercado=Supermercado.idSupermercado where CarrinhoQuantidade.emailUtilizador='"+user+"' group by Supermercado_idSupermercado, CarrinhoQuantidade.idProduto) as calculo GROUP BY nome,idSupermercado order by precoTotal asc", function(err, results) {
            console.log(results);
            conn.release();
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
}

module.exports.getTipo = function (callback, next) {
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        conn.query("select * from TipoProduto", function(err, results) {
            console.log(results);
            conn.release();
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
}


module.exports.getProdutosFiltro = function (tipo,callback, next) {
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        conn.query("select idProduto,imagemProduto,nomeProduto,AVG(precoProduto) from Produto inner join TipoProduto on Produto.idTipoProduto=TipoProduto.idTipoProduto inner join PrecoProduto on Produto.idTipoProduto=PrecoProduto.Produto_idProduto where Produto.idTipoProduto='"+tipo+"'group BY Produto.idProduto,Produto.nomeProduto,Produto.imagemProduto", function(err, results) {
            console.log(results);
            conn.release();
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
}


module.exports.getProdutosProcura = function (procura,callback, next) {
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        conn.query("select * from Produto where nomeProduto like '%"+procura+"%' or descricaoProduto like '%"+procura+"%'", function(err, results) {
            console.log(results);
            conn.release();
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
}

module.exports.getMarca = function (callback, next) {
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        conn.query("select * from MarcaProduto", function(err, results) {
            console.log(results);
            conn.release();
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
}

module.exports.getProdutosMarca = function (marca,callback, next) {
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        conn.query("select * from Produto where idMarcaProduto='"+marca+"'", function(err, results) {
            console.log(results);
            conn.release();
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
}