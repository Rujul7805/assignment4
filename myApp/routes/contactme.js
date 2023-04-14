var express = require("express");
var router = express.Router();

/* GET contactme page. */
router.get("/", function(req, res, next) {
	res.send("Welcome to contacts");
});

module.exports = router;