var express = require("express");
var router = express.Router();

const users = require("./users.js");
/* GET home page. */

router.use("/users", users);
router.get("/", function(req, res, next) {
  res.json({ title: "Express" });
});

module.exports = router;
