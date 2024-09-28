const { v4: uuidv4 } = require("uuid");
const FAQ = require("../../domain/models/FAQ");

class FAQService {
  constructor(FAQRepository) {
    this.FAQRepository = FAQRepository;
  }

  async createQuestion(questionData) {
    questionData.id = uuidv4();

    const { id, userId, question } = questionData;

    const newFAQ = new FAQ(id, userId, question);
    const FAQDocument = newFAQ.toDatabaseFormat();

    return await this.FAQRepository.createQuestion(FAQDocument);
  }

  async updateAnswer(questionId, answer) {
    return await this.FAQRepository.updateAnswer(questionId, answer);
  }

  async getAllFAQ() {
    return await this.FAQRepository.getAll();
  }
}

module.exports = FAQService;
