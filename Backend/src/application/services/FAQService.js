const { v4: uuidv4 } = require("uuid");
const FAQ = require("../../domain/models/FAQ");

class FAQService {
  constructor(FAQRepository) {
    this.FAQRepository = FAQRepository;
  }

  async createQA(QA) {
    questionData.id = uuidv4();

    const { id, userId, question, answer } = QA;

    const newFAQ = new FAQ(id, userId, question, answer);
    const FAQDocument = newFAQ.toDatabaseFormat();

    return await this.FAQRepository.createQuestion(FAQDocument);
  }

  async updateQA(questionId, QA) {
    const { id, userId, question, answer } = QA;
    const newFAQ = new FAQ(id, userId, question, answer);
    const FAQDocument = newFAQ.toDatabaseFormat();

    return await this.FAQRepository.updateAnswer(questionId, FAQDocument);
  }

  async getAllFAQ() {
    return await this.FAQRepository.getAll();
  }
}

module.exports = FAQService;
