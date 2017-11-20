var express = require("express");
var burger = require("../models/burger");
var router = express.Router();
//Routes api with the functions established in the model file 
//To be pushed to the server file
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var allObject = {
            burger_name: data
        };
        console.log(allObject);
        res.render("index", allObject)
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne([
        "burger_name"], [req.body.burger_name], function(result){
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne(
        { devoured: req.body.devoured}
   , condition, function(result){
    if(result.changedRows == 0){
        return res.status(404).end();
    } else {
        return res.status(200).end();
    }
   });
});

module.exports = router;