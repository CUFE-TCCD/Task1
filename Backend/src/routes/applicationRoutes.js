const express = require("express");
const router = express.Router();
const Application = require("../models/ApplicationSchema");

// Route to add an application
router.post("/applications", async (req, res) => {
  // TODO: create a new application
});

// Route to update an application
router.put("/applications/:id", async (req, res) => {
  // TODO: update an application by id
});

// Route to delete an application
router.delete("/applications/:id", async (req, res) => {
  // TODO: delete an application by id
});

module.exports = router;
