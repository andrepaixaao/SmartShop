var pool = require('./connection').pool;

module.exports.getUtilizador = function(utilizador,callback, next) {
    pool.getConnection(function(err,conn){  
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
       conn.query("select nomeUtilizador from Utilizador where emailUtilizador='"+utilizador+"';", function(err, results) {
            conn.release();
            if (err) {
                console.log(err);
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
        conn.query("select Produto.idProduto,Produto.imagemProduto,Produto.nomeProduto,CAST(AVG(PrecoProduto.precoProduto)as decimal(10,2)) as preco from Produto left join PrecoProduto on PrecoProduto.Produto_idProduto=Produto.idProduto group by Produto.idProduto,Produto.nomeProduto,Produto.imagemProduto; ", function(err, results) {
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

module.exports.addCarrinho = function (data,callback, next) {
    
    pool.getConnection(function (err, conn) {
        if (err) {
            cb(err, { code: 500, status: "Error connecting to database." })
            return;
        }
        conn.query("Insert into CarrinhoQuantidade (quantidade,emailUtilizador,idProduto) values ('1','"+data.username+"','"+data.produto+"');",function (err, results) {
            conn.release();
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
            callback(false, {code: 200, status:"ok", data: results})
            
        })
    })
}

module.exports.registarUser = function (data,callback, next) {
    
    pool.getConnection(function (err, conn) {
        if (err) {
            cb(err, { code: 500, status: "Error connecting to database." })
            return;
        }
        console.log(data);
        conn.query("Insert into Utilizador(emailUtilizador,nomeUtilizador,passwordUtilizador) values ('"+data.email+"','"+data.nome+"','"+data.password+"');",function (err, results) {
            conn.release();
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
            callback(false, {code: 200, status:"ok", data: results})
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
        conn.query("select Produto.idProduto,Produto.imagemProduto,Produto.nomeProduto,CAST(AVG(PrecoProduto.precoProduto)as decimal(10,2)) as preco from Produto left join PrecoProduto on PrecoProduto.Produto_idProduto=Produto.idProduto  where Produto.idTipoProduto='"+tipo+"'group by Produto.idProduto,Produto.nomeProduto,Produto.imagemProduto", function(err, results) {
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
        conn.query("select Produto.idProduto,Produto.imagemProduto,Produto.nomeProduto,CAST(AVG(PrecoProduto.precoProduto)as decimal(10,2)) as preco from Produto left join PrecoProduto on PrecoProduto.Produto_idProduto=Produto.idProduto where nomeProduto like '%"+procura+"%' or descricaoProduto like '%"+procura+"%' group by Produto.idProduto,Produto.nomeProduto,Produto.imagemProduto", function(err, results) {
            console.log(results);
            conn.release();
            if (err) {
                console.log(err);
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
        conn.query("select Produto.idProduto,Produto.imagemProduto,Produto.nomeProduto,CAST(AVG(PrecoProduto.precoProduto)as decimal(10,2)) as preco from Produto left join PrecoProduto on PrecoProduto.Produto_idProduto=Produto.idProduto where idMarcaProduto='"+marca+"' group by Produto.idProduto,Produto.nomeProduto,Produto.imagemProduto ", function(err, results) {
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

module.exports.addLista = function (data,callback, next) {
    
    pool.getConnection(function (err, conn) {
        if (err) {
            cb(err, { code: 500, status: "Error connecting to database." })
            return;
        }
        conn.query("Insert into Lista(utilizadorOrigem,nomeLista)values ('"+data.username+"','"+data.nome+"');",function (err, results) {;
            conn.release();
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
}

module.exports.getIdLista = function (callback, next) {
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        conn.query("select max(idLista) as id from Lista", function(err, results) {
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


module.exports.addProdutosLista = function (data,callback, next) {
    
    pool.getConnection(function (err, conn) {
        if (err) {
            cb(err, { code: 500, status: "Error connecting to database." })
            return;
        }
        console.log(data);
        conn.query("insert into Lista_has_Produto(Lista_idLista,Produto_idProduto,quantidadeProduto) select '"+data.id+"',idProduto,quantidade from CarrinhoQuantidade where emailUtilizador='"+data.username+"';",function (err, results) {
            console.log(err);
            console.log(results);
            conn.release();
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
}

module.exports.getMinhasListas = function (util,callback, next) {
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        conn.query("select idLista,nomeLista from Lista where utilizadorOrigem='"+util+"'", function(err, results) {
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

module.exports.ApagarCarrinho = function (util,callback, next) {
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        conn.query("delete from CarrinhoQuantidade where emailUtilizador='"+util+"'", function(err, results) {
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

module.exports.UsarLista = function (data,callback, next) {
    
    pool.getConnection(function (err, conn) {
        if (err) {
            cb(err, { code: 500, status: "Error connecting to database." })
            return;
        }
        console.log(data);
        conn.query("insert into CarrinhoQuantidade(quantidade,emailUtilizador,idProduto) select quantidadeProduto,'"+data.username+"',Produto_idProduto from Lista_has_Produto where Lista_idLista='"+data.idLista+"';",function (err, results) {
            console.log(err);
            console.log(results);
            conn.release();
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
}

module.exports.getLista = function (lista,callback, next) {
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        conn.query("select Produto.idProduto,Produto.nomeProduto,CAST(SUM(Lista_has_Produto.quantidadeProduto/5)as decimal(10,0)) as quantidade,CAST(AVG(PrecoProduto.precoProduto)as decimal(10,2)) as preco,CAST(SUM(Lista_has_Produto.quantidadeProduto/5)as decimal(10,0))*CAST(AVG(PrecoProduto.precoProduto)as decimal(10,2)) as precototal from Produto left join Lista_has_Produto on Lista_has_Produto.Produto_idProduto=Produto.idProduto left join PrecoProduto on PrecoProduto.Produto_idProduto=Produto.idProduto where Lista_has_Produto.Lista_idLista='"+lista+"'  GROUP by Produto.idProduto,Produto.nomeProduto,Lista_has_Produto.quantidadeProduto", function(err, results) {
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

module.exports.PartilharLista = function (data,callback, next) {
    
    pool.getConnection(function (err, conn) {
        if (err) {
            cb(err, { code: 500, status: "Error connecting to database." })
            return;
        }
        console.log(data);
        conn.query("insert into Utilizador_has_Lista(Utilizador_emailUtilizador,Lista_idLista)values('"+data.username+"','"+data.idLista+"');",function (err, results) {

            conn.release();
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
}

module.exports.getListasPartilhadas = function (user,callback, next) {
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        conn.query("select Lista.idLista, Lista.nomeLista from Lista inner join Utilizador_has_Lista on Utilizador_has_Lista.Lista_idLista=Lista.idLista where Utilizador_emailUtilizador='"+user+"';", function(err, results) {
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

module.exports.getContagemCarrinho = function (user,callback, next) {
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        conn.query("select count(*) as contagem from CarrinhoQuantidade where emailUtilizador='"+user+"';", function(err, results) {
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

module.exports.ApagarCarrinho = function (util,callback, next) {
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        conn.query("delete from CarrinhoQuantidade where emailUtilizador='"+util+"'", function(err, results) {
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

module.exports.ApagarUn = function (data,callback, next) {
    
    pool.getConnection(function (err, conn) {
        if (err) {
            cb(err, { code: 500, status: "Error connecting to database." })
            return;
        }
        console.log(data);
        conn.query("delete from CarrinhoQuantidade where idProduto='"+data.produto+"' and emailUtilizador='"+data.username+"' LIMIT 1;;",function (err, results) {
            console.log(err);
            console.log(results);
            conn.release();
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
}


module.exports.ApagarProduto = function (data,callback, next) {
    
    pool.getConnection(function (err, conn) {
        if (err) {
            cb(err, { code: 500, status: "Error connecting to database." })
            return;
        }
        console.log(data);
        conn.query("delete from CarrinhoQuantidade where idProduto='"+data.produto+"' and emailUtilizador='"+data.username+"';",function (err, results) {
            console.log(err);
            console.log(results);
            conn.release();
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
}

module.exports.getRankingDistancia = function (data,callback, next) {
    
    pool.getConnection(function (err, conn) {
        if (err) {
            cb(err, { code: 500, status: "Error connecting to database." })
            return;
        }
        console.log(data);
        conn.query("SELECT CAST(ST_DISTANCE_SPHERE(POINT('"+data.lat+"','"+data.long+"'),coords)/1000 as decimal(10,2)) as distancia, idMoradaSupermercado,nomeMercado from MoradaSupermercado inner join Supermercado on MoradaSupermercado.Supermercado_idSupermercado=Supermercado.idSupermercado having distancia<="+data.maxdist+" order by distancia asc limit 5;",function (err, results) {
            console.log(err);
            console.log(results);
            conn.release();
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
}

module.exports.getRankingRota = function (data,callback, next) {
    
    pool.getConnection(function (err, conn) {
        if (err) {
            cb(err, { code: 500, status: "Error connecting to database." })
            return;
        }
        console.log(data);
        conn.query(" SELECT ST_DISTANCE_SPHERE(POINT('"+data.lat+"','"+data.long+"'),coords) as distancia ,ST_X(coords)as lat,ST_Y(coords)as lon from MoradaSupermercado where Supermercado_idSupermercado='"+data.idSupermercado+"' order by distancia limit 1;",function (err, results) {
            console.log(err);
            console.log(results);
            conn.release();
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
}

module.exports.getProduto = function (idProd,callback, next) {
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        conn.query("select Produto.descricaoProduto,Produto.idProduto,Produto.imagemProduto,Produto.nomeProduto,CAST(AVG(PrecoProduto.precoProduto)as decimal(10,2)) as preco from Produto left join PrecoProduto on PrecoProduto.Produto_idProduto=Produto.idProduto where Produto.idProduto="+idProd+" group by Produto.idProduto,Produto.nomeProduto,Produto.imagemProduto,Produto.descricaoProduto; ", function(err, results) {
            conn.release();
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
}

module.exports.getProdutosSugestao = function (idProd,callback, next) {
    pool.getConnection(function(err,conn){
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        conn.query("select Produto.imagemProduto,Produto.idProduto from Produto where idProduto!="+idProd+" and idMarcaProduto in(select idMarcaProduto from Produto where idProduto="+idProd+");", function(err, results) {
            conn.release();
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
            callback(false, {code: 200, status:"ok", data: results})
        })
    })
}


