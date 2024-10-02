const { v4: uuidv4 } = require("uuid");
const FAQ = require("../../domain/models/FAQ");

class FAQService {
  constructor(FAQRepository) {
    this.FAQRepository = FAQRepository;
  }

  async createQA(QA) {
    QA.id = uuidv4();

    const { id, question, answer } = QA;

    const newFAQ = new FAQ(id, question, answer);
    const FAQDocument = newFAQ.toDatabaseFormat();

    return await this.FAQRepository.createQuestion(FAQDocument);
  }

  async updateQA(questionId, QA) {
    const { id, question, answer } = QA;
    const newFAQ = new FAQ(id, question, answer);

    const FAQDocument = newFAQ.toDatabaseFormat();
    const newQA = await this.FAQRepository.updateAnswer(
      questionId,
      FAQDocument
    );

    if (!newQA) {
      const error = new Error("There is no QA with that id");
      error.statusCode = 404;
      throw error;
    }
    return newQA;
  }

  async getAllFAQ() {
    return await this.FAQRepository.getAll();
  }
}

module.exports = FAQService;
