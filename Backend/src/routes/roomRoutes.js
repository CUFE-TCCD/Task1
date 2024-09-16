const express = require("express");
const router = express.Router();
const Room = require("../models/RoomSchema");

// Route to add a room
router.post("/rooms", async (req, res) => {
  // TODO:create a new room'
  const newRoom = { ...req.body };
  try {
    if (!newRoom.name) {
      return res.status(400).json({
        status: "failed",
        error: "Name is required",
      });
    }
    if (!newRoom.location) {
      return res.status(400).json({
        status: "failed",
        error: "location is required",
      });
    }
    if (!newRoom.capacity || !isNumberObject(newRoom.capacity)) {
      return res.status(400).json({
        status: "failed",
        error: "Capacity is required and must be a number",
      });
    }

    await Room.create(newRoom);
    res.status(201).json({
      status: "success",
      data: newRoom,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err.message,
    });
  }
});

// Route to update a room
router.put("/rooms/:id", async (req, res) => {
  // TODO: update a room by id
  const { id } = req.params;
  try {
    const room = await Room.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!room) {
      return res.status(404).json({
        status: "failed",
        error: "Room not found",
      });
    }
    res.json({
      status: "success",
      data: room,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err.message,
    });
  }
});

// Route to delete a room
router.delete("/rooms/:id", async (req, res) => {
  // TODO: delete a room by id
  const { id } = req.params;
  try {
    const room = await Room.findByIdAndDelete(id);
    if (!room) {
      return res.status(404).json({
        status: "failed",
        error: "Room not found",
      });
    }
    res.json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err.message,
    });
  }
});

module.exports = router;
