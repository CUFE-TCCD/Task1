const container = require("../../container/servicesContainer");
const FeedbackService = container.resolve('FeedbackService');

const getAllFeedbacks = async (req, res) => {
  try {
    const FeedbackService = req.container.resolve('FeedbackService', new Set(), req.requestScope);
    const feedbacks = await FeedbackService.getAllFeedbacks();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Failed to get feedbacks" });
  }
};

module.exports = {
  getAllFeedbacks,
};
