const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/feedbacks", authMiddleware, feedbackController.getAllFeedbacks);

module.exports = router;
