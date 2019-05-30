const express = require("express");
const router = express.Router();
var mongoose = require('mongoose');


var commentSchema = new mongoose.Schema({
    body: String,
  //   tagList: [{ type: String }],
  }, {timestamps: true});
const comments = mongoose.model('Comment', commentSchema);


router.post("/", (req, res) => {
    var body = {
        'body':'this is the body',
    };
    var comment = new comments(body);

    comment.save((err, data) => {
        if(err){
            res.send(err);
        }
        console.log(data);
        res.json(data);
    });
});

router.get("/", (req, res) => {
    comments.find({}, (err, data) => {
        if (err){
            res.send(err);
        }
        return res.json(data);
    });
});

module.exports = router;