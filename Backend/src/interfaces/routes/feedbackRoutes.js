const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/feedbacks", feedbackController.getAllFeedbacks);
router.get("/feedback/count", feedbackController.getFeedbackCountByType);


module.exports = router;
