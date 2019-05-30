const express = require("express");
const router = express.Router();
var mongoose = require('mongoose');


var DishSchema = new mongoose.Schema({
    title: String,
    description: String,
    ratings: {type: Number, default: 0},
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  //   tagList: [{ type: String }],
  }, {timestamps: true});
const dishes = mongoose.model('Dish', DishSchema);


router.post("/", (req, res) => {
    res.send({ data: "", dis: "" });
    var body = {
        'title':'burger',
        'description': 'none'
    };
    var dish = new dishes(body);
    console.log(DishSchema);

    dish.save((err, data) => {
        if(err){
            res.send(err);
        }
        console.log(data);
        res.json(data);
    });
});

router.get("/", (req, res) => {
    dishes.find({}, (err, data) => {
        if (err){
            res.send(err);
        }
        return res.json(data);
    });
});

module.exports = router;