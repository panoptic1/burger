//import the connection to the db
var connection = require("./connection.js");

//create the orm object with its methods - general
var orm = {
    //select all items and their data from a specified table
    selectAll: function(table, callBack) {
        connection.query("SELECT * FROM ??", [table], function(err, result) {
            if(err) throw err;
            callBack(result);
        });
    },
    //add a new item to a specific table and column with a specified value
    insertOne: function(table, col, val, callBack) {
        var queryString = "INSERT INTO " + table + "(" + col + ") VALUES (?)";

        connection.query(queryString, [val], function(err, result) {
            if(err) throw err;
            callBack(result);
        });
    },
    //update a specified value of a column in a table
    updateOne: function(table, col, val, itemID, callBack) {
        var queryString = "UPDATE " + table + " SET " + col + "=" + val + " WHERE id = " + itemID;

        connection.query(queryString, [val, itemID], function(err, result)  {
            if(err) throw err;
            callBack(result);
        });
    },
    //delete a specified item from a table using the item's id
    deleteOne: function(table, itemID, callBack) {
        var queryString = "DELETE FROM " + table + " WHERE id = " + itemID;

        connection.query(queryString, [itemID], function(err, result) {
            if(err) throw err;
            callBack(result);
        });
    }
}

module.exports = orm;