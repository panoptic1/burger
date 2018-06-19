var express = require("express");

//import burger model
var burger = require("../models/burger.js")

//router variable
var router = express.Router();

//set up routes using Express router

//GET route
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var handleBarsObj = {burgers: data}
        res.render("index", handleBarsObj);
    });
});

//POST route
router.post("/api/burgers", function(req, res){
    //console.log(req.body.burgerName);
    burger.insertOne(req.body.burgerName, function(){
        res.redirect("/");
    });
});

//PUT route
router.put("/api/burgers/update", function(req, res){
    console.log(req.params.id);
    console.log('YEAH WE MADE IT TO THE UPDATE PAGE +++++>')
    burger.updateOne(req.body.burger_id, function(){
        res.redirect("/");
    });
});

//DELETE route
router.delete("/api/burgers/:id", function(req, res){
    console.log(req.params.id);
    burger.updateOne(req.params.id, function(){
        res.redirect("/");
    });
});

module.exports = router;


