var connection = require("./connection");

//This function turns required question marks in the below querystrings into a string
function printQuery(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    };
    return arr.toString();
};
//Turns object/key pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";"
        connection.query(queryString, function(err, result){
            if(err){
                throw err
            } else{
                cb(result);
            };
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += "("
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuery(vals.length);
        queryString += ") ";

        console.log(queryString);
        connection.query(queryString, vals, function(err, result){
            if(err){
                throw err;
            } else{
                cb(result);
            }
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
       var queryString = "UPDATE " + table;
       queryString += " SET ";
       queryString += objToSql(objColVals);
       queryString += " WHERE ";
       queryString += condition;
       console.log(queryString);
       connection.query(queryString, function(err, result){
           if (err){
               throw(err)
           }else{
               cb(result)
           };
       });
    }
};

module.exports = orm;