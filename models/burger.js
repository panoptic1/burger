//import the orm object
var orm = require("../config/orm.js");

var burger = {
    //select all of the burgers and their data
    selectAll: function(callBack) {
        orm.selectAll("burgers", function(res) {
            callBack(res);
        });
    },
    //add a new burger to the db
    insertOne: function(newBurger, callBack) {
        orm.insertOne("burgers", "burger_name", newBurger, function(res) {
            callBack(res);
        });
    },
    //update the devoured data in the database - move burger to eaten section
    updateOne: function(burgerID, callBack) {
        orm.updateOne("burgers", "devoured", 1, burgerID, function(res) {
            callBack(res);
        });
    },
    //delete the selected burger from the database
    deleteOne: function(burgerID, callBack) {
        orm.deleteOne("burgers", burgerID, function(res) {
            callBack(res);
        });
    }
}

module.exports = burger;