const { users, getUserById, myUser } = require("../data");

const express = require("express");
const router = express.Router();

router
  .route("/api/users/:id")
  // get a specific user by id
  .get((req, res) => {
    const user = getUserById(Number(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.send("not valid id, user does not exist.");
    }
  })
  // removes a specific user by id
  .delete((req, res) => {
    const index = users.indexOf(getUserById(Number(req.params.id)));
    if (index > -1) {
      // only remove if user found
      users.splice(index, 1);
    } else {
      res.send("not valid id");
    }
  });

router
  .route("/api/users/:id/edit")
  // edit a specific user by id
  .put((req, res) => {
    console.log(req.body);
    // FIRST CHECK IF USER IS THE CURRENT USER
    const user = getUserById(Number(req.params.id));
    if (user) {
      if (user.id == myUser.id) {
        const { name, pfp, username, bio } = req.body;
        if (name && pfp && username && bio) {
          user.name = name;
          user.pfp = pfp;
          user.username = username;
          user.bio = bio;
          res.json(user);
        } else {
          res.send(
            "Error: edit params are incomplete. You need to provide name, pfp, username, and bio."
          );
        }
      } else {
        res.send("Error: you can only edit your own user profile");
      }
    } else {
      res.send("Error: user does not exist.");
    }
  });

module.exports = router;
