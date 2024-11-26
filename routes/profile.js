const express = require("express");
const router = express.Router();

// render home page
router.route("/profile").get((req, res) => {
  res.render("Profile");
});

module.exports = router;
