const express = require("express");
const router = express.Router();
const Post = require("../models/PostSchema");

// Route to add a post
router.post("/posts", async (req, res) => {
  // TODO: create a new post
});

// Route to update a post
router.put("/posts/:id", async (req, res) => {
  // TODO: update a post by id
});

// Route to delete a post
router.delete("/posts/:id", async (req, res) => {
  // TODO: delete a post by id
});

module.exports = router;
