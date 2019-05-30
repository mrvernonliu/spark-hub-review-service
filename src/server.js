const express = require('express');

const router = express.Router()
const homepageController = require("./homepage/controller");
const dishController = require("./dish/controller");
const commentController = require("./comment/controller");

mongoose = require('mongoose');
const port = 8000;

const app = express();
//Endpoints
app.use("/dish", dishController);
app.use("/comment", commentController);
app.use("/home", homepageController);

mongoose.connect('mongodb+srv://dev:Test123!@spark-hub-dev1-qubcu.mongodb.net/test?retryWrites=true&w=majority');
require('./models/comments');
require('./models/dishes');


app.listen(port, () => { 
    console.log('Server started on port ' + port); 
});

module.exports = router;