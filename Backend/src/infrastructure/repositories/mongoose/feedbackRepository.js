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

  async getAllFeedBacks(){
    return await FeedbackModel.find().exec();
  }

  async countFeedbackByType() {
    const feedbackCount = await FeedbackModel.aggregate([
      {
        $group: {
          _id: '$type',
          count: { $sum: 1 }
        }
      }
    ]);

    const result = {
      positive: 0,
      negative: 0,
    };

    feedbackCount.forEach((item) => {
      if (item._id === true) {
        result.positive = item.count;
      } else {
        result.negative = item.count;
      }
    });

    return result;
  }
}

module.exports = FeedbackRepository;
