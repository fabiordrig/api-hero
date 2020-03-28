const express = require("express");
const router = express.Router();
const { incidents } = require("../controllers");

router
  .post("/", incidents.create)
  .get("/", incidents.index)
  .get("/:id", incidents.getIncidentsByOng)
  .delete("/:id", incidents.del);

module.exports = router;
