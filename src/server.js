const express = require('express');

const app = express();
const router = express.Router()
const homepageController = require("./homepage/controller");
const dishController = require("./dish/controller");
const commentController = require("./comment/controller");

const port = 8000;

//Endpoints
app.use("/dish", dishController);
app.use("/comment", commentController);
app.use("/home", homepageController);




app.listen(port, () => { 
    console.log('Server started on port ' + port); 
});

module.exports = router;