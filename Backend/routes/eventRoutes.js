const express = require("express");
const router = express.Router();
const Event = require("../models/EventSchema");

// Route to add an event
router.post("/events", async (req, res) => {
  // TODO: create a new event
});

// Route to update an event
router.put("/events/:id", async (req, res) => {
  // TODO: update an event by id
});

// Route to delete an event
router.delete("/events/:id", async (req, res) => {
  // TODO: delete an event by id
});

module.exports = router;
