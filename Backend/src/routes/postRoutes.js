const express = require("express");
const router = express.Router();
const Post = require("../models/PostSchema");
const { generateId } = require("../helpers/utils");

// Route to add a post
router.post("/posts", async (req, res) => {
  // TODO: create a new post
  try {
    // TODO: create a new application
    const userId = req.user._id
    const { title, content, media } = req.body

    // Empty title
    if (!title) {
      return res.status(400).send({
        success: false,
        message: "Title can't be empty"
      })
    }

    // Empty media
    if (!content) {
      return res.status(400).send({
        success: false,
        message: "The content can't be empty"
      })
    }

    const post = await new Post({ _id: generateId(), userId, title, content, media }).save()

    return res.status(201).send({
      success: true,
      message: "Your post created successfully",
      post
    })

  } catch (err) {
    console.log(err)
    return res.status(500).send({
      success: false,
      message: "Error creating post"
    })
  }
});

// Route to update a post
router.put("/posts/:id", async (req, res) => {
  // TODO: update a post by id
  try {
    const { title, content, media } = req.body
    const post = await Post.findById(req.params.id)

    if (!post) {
      return res.status(404).send({
        success: false,
        message: "This post not exist"
      })
    }

    // Empty title
    if (!title) {
      return res.status(400).send({
        success: false,
        message: "Title can't be empty"
      })
    }

    // Empty media
    if (!content) {
      return res.status(400).send({
        success: false,
        message: "The content can't be empty"
      })
    }

    post.title = title
    post.content = content
    post.media = media

    await post.save()

    return res.status(200).send({
      success: true,
      message: "Your post saved successfully",
      post
    })
  } catch (err) {
    console.log(err)
    return res.status(500).send({
      success: false,
      message: "Error updating post"
    })
  }
});

// Route to delete a post
router.delete("/posts/:id", async (req, res) => {
  // TODO: delete a post by id
  try {
    // Post not exist
    if (!await Post.findByIdAndDelete(req.params.id)) {
      return res.status(404).send({
        success: false,
        message: "This post not exist"
      })
    }

    return res.status(202).send({
      success: true,
      message: "Post deleted successfully"
    })

  } catch (err) {
    console.log(err)
    return res.status(500).send({
      success: false,
      message: "Error deleting post"
    })
  }
});

module.exports = router;
