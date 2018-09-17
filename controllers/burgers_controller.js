var express = require("express");
var burger = require("../models/burger.js")
var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObj = { burgers: data };
        console.log(hbsObj);
        res.render('index', hbsObj);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect('/');
    });
});

router.put("/api/burgers/:id", function (req, res) {
    burger.updateOne(req.params.id, function () {
        res.redirect('/');
    });
});

// router.delete("/api/burgers/:id", function (req, res) {

// });

module.exports = router;