var express = require("express");
var router = express.Router();

/* GET projects page. */
router.get("/", function(req, res, next) {
	res.send("Welcome to projects page");
});

module.exports = router;
