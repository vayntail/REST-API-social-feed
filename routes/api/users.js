const { users } = require("../data");

const express = require("express");
const router = express.Router();

// api
router
  .route("/api/users")
  .get((req, res) => {
    res.json(users);
  })
  .put((req, res) => {});

module.exports = router;
