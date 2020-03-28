const express = require("express");
const router = express.Router();
const { ongs } = require("../controllers");

router.post("/", ongs.create).get("/", ongs.index);

module.exports = router;
