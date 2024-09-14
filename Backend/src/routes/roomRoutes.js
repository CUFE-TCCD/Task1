const express = require("express");
const router = express.Router();
const Room = require("../models/RoomSchema");

// Route to add a room
router.post("/rooms", async (req, res) => {
  // TODO:create a new room
});

// Route to update a room
router.put("/rooms/:id", async (req, res) => {
  // TODO: update a room by id
});

// Route to delete a room
router.delete("/rooms/:id", async (req, res) => {
  // TODO: delete a room by id
});

module.exports = router;
