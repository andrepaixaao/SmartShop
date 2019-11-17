var pool = require('./connection').pool;

module.exports.getUtilizadores = function(utilizador,callback, next) {
    pool.getConnection(function(err,conn){  
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        pool.query("select * from Utilizador where emailUtilizador=?",utilizador, function(err, results) {
            console.log(results);
            // VERY IMPORTANT: Always release a connection after you don't need it
            // You can make more then one query but in the last one release it
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
            console.log(results);
            // VERY IMPORTANT: Always release a connection after you don't need it
            // You can make more then one query but in the last one release it
            pool.releaseConnection;
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
            callback(false, {code: 200, status:"ok", data: results})
        })
       
    })

}

module.exports.getItems = function(callback, next) {
    pool.getConnection(function(err,conn){  
        if (err) {
            callback(err,{code: 500, status: "Error in the connection to the database"})
        }
        pool.query("select * from Produto", function(err, results) {
            console.log(results);
            // VERY IMPORTANT: Always release a connection after you don't need it
            // You can make more then one query but in the last one release it
            pool.releaseConnection;
            if (err) {
                callback(err,{code: 500, status: "Error in a database query"})
                return;
            } 
            callback(false, {code: 200, status:"ok", data: results})
        })
       
    })

}




