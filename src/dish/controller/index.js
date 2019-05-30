const express = require("express");
const router = express.Router();
var mongoose = require('mongoose');
var DishSchema = require('../../models/dishes');
const dishes = mongoose.model('Dish', DishSchema);


router.post("/", (req, res) => {
    // res.send({ data: "", dis: "" });
    var dish = new dishes({'name': "burgerburgerbbbbb",
    'description': "no",
    'comments': [] });

    dish.save((err, data) => {
        if(err){
            res.send(err);
        }
        res.json(data);
    });
});

router.get("/", (req, res) => {
    dishes.find({}, (err, data) => {
        if (err){
            res.send(err);
        }
        return data;
    });
});

module.exports = router;