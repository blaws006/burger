//This connects us to the mysql database
var mysql = require('mysql');

var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'R3dsk1ns1!',
    database: 'burgers_db'
});
};
//Connection and confirmation
connection.connect(function(err){
    if (err){
        console.log("Error connecting: " + err.stack);
    } else{
        console.log("Connected as id: " + connection.threadId);
    }
});

module.exports = connection;