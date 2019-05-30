const express = require("express");
const router = express.Router();
const homepageService = require("../service");

router.get("/", (req, res) => {
    res.send(homepageService.getHomePage());
})

module.exports = router;