class FeedbackService {
  constructor(feedbackRepository) {
    this.feedbackRepository = feedbackRepository;
  }

  async createFeedback(feedbackData) {
    const { id, userId, eventId, feedback } = feedbackData;
    const feedbackObj = new Feedback(id, userId, eventId, feedback);

    if (!feedbackObj.isValid()) {
      throw new Error("Invalid feedback data.");
    }

    return await this.feedbackRepository.create(feedbackObj);
  }

  async getAllFeedbacks() {
    return await this.feedbackRepository.getAllFeedBacks();
  }
  
  async getFeedbackByEvent(eventId) {
    return await this.feedbackRepository.findByEventId(eventId);
  }

  async getFeedbackByUser(userId) {
    return await this.feedbackRepository.findByUserId(userId);
  }

  async deleteFeedback(id) {
    return await this.feedbackRepository.delete(id);
  }
}

module.exports = FeedbackService;
