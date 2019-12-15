var mysql = require('mysql');

var pool  = mysql.createPool({
    host     : 'remotemysql.com',
    user     : 'JsimuyOnoL',
    password : 'YXDS6XfIpB',
    database : 'JsimuyOnoL',
    port:3306
});

module.exports.pool = pool;





