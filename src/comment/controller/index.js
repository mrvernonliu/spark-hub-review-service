const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.send("comment");
})

module.exports = router;