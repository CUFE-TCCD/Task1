const container = require("../../container/servicesContainer");
const FeedbackService = container.resolve('FeedbackService');

const getAllFeedbacks = async (req, res) => {
  try {
    const FeedbackService = req.container.resolve('FeedbackService', new Set(), req.requestScope);
    const feedbacksDB = await FeedbackService.getAllFeedbacks();
    let feedbacks = [];
    for(let feedback in feedbacksDB)
    {
      obj = {feedback: feedbacksDB[feedback].feedback, status: feedbacksDB[feedback].type};
      feedbacks.push(obj);
    }
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Failed to get feedbacks" });
  }
};
const getFeedbackCountByType = async (req, res) => {
  try {
    const feedbackCount = await FeedbackService.getFeedbackCountByType();
    res.status(200).json(feedbackCount);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to count feedback" });
  }
};
module.exports = {
  getAllFeedbacks,
  getFeedbackCountByType
};
