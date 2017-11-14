var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'R3dsk1ns1!',
    database: 'burgers_db'
});

connection.connect(function(err){
    if (err){
        console.log("Error connecting: " + err.stack);
    } else{
        console.log("Connected as id: " + connection.threadId);
    }
});

module.exports = connection;