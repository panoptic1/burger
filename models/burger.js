//import the ORM
var orm = require("../config/orm.js")

//Create code to invoke orm methods

var burger = {
    //Select all of the burgers 
    selectAll: function(callBack){
        orm.selectAll(function(res){
            callBack(res);
        });
    },

    //Add a new burger to the db
    insertOne: function(newBurg, callBack){
        orm.insertOne(newBurg, function(res){
            callBack(res);
        });
    },

    updateOne: function(eatenBurg, callBack){
        orm.updateOne(eatenBurg, function(res){
            callBack(res);
        });
    },

    deleteOne: function(deletedBurg, callBack){
        orm.deleteOne(deletedBurg, function(res){
            callBack(res);
        });
    }
}

module.exports = burger;