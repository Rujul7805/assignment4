var express = require("express");
var router = express.Router();

/* GET About me page page. */
router.get("/", function(req, res, next) {
	res.send("Wlcome to About section");
});

module.exports = router;
