var express = require("express");
var router = express.Router();

/* GET services page. */
router.get("/", function(req, res, next) {
	res.send("Welcome to services page");
});

module.exports = router;