var express = require("express");
var router = express.Router();

const ongs = require("./ongs");
const incidents = require("./incidents");
const session = require("./session");

router.use("/ongs", ongs);
router.use("/incidents", incidents);
router.use("/session", session);
router.get("/", function(req, res, next) {
  res.json({ title: "Tem nada" });
});

module.exports = router;
