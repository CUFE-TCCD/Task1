const FeedbackModel = require("../../database/mongoose/models/FeedbackSchema");

class FeedbackRepository {
  async create(feedback) {
    return await FeedbackModel.create(feedback);
  }

  async getById(id) {
    return await FeedbackModel.findById(id).exec();
  }

  async findByEventId(eventId) {
    return await FeedbackModel.find({ eventId }).exec();
  }

  async findByUserId(userId) {
    return await FeedbackModel.find({ userId }).exec();
  }

  async update(id, updatedData) {
    return await FeedbackModel.findByIdAndUpdate(id, updatedData, { new: true }).exec();
  }

  async delete(id) {
    return await FeedbackModel.findByIdAndDelete(id).exec();
  }
}

module.exports = FeedbackRepository;
