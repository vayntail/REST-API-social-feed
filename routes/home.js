const express = require("express");
const router = express.Router();

// render home page
router.route("/").get((req, res) => {
  res.render("Home");
});

module.exports = router;
