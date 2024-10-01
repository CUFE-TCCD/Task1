const QuestionModel = require("../../database/mongoose/models/QuestionSchema");

class QuestionRepository {
  async addQuestion(question) {
    return await QuestionModel.create(question);
  }

  async getAll() {
    return await QuestionModel.find().select("-__v");
  }
}

module.exports = QuestionRepository;
