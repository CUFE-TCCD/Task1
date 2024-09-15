const express = require("express");
const router = express.Router();
const User = require("../models/UserSchema");

const authController = require("../controllers/authController");

router.post("/users/register", authController.signup);
router.post("/users/login", authController.login);
// Route to add a user
router.post("/users", async (req, res) => {
  // TODO: create a new user
});

// Route to update a user
router.put("/users/:id", async (req, res) => {
  // TODO: update a user by id
});

// Route to delete a user
router.delete("/users/:id", async (req, res) => {
  // TODO: delete a user by id
});

module.exports = router;
