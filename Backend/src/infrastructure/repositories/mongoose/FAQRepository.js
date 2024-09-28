const FAQModel = require("../../database/mongoose/models/FAQSchema");

class FAQRepository {
  async createQuestion(question) {
    return await FAQModel.create(question);
  }

  async updateAnswer(id, answer) {
    return await FAQModel.findByIdAndUpdate(id, { answer }, { new: true });
  }
  async getAll() {
    return await FAQModel.find().select("question answer -_id");
  }
}

module.exports = FAQRepository;
