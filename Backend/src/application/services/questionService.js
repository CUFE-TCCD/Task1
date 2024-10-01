const Question = require("../../domain/models/Question");
const { v4: uuidv4 } = require("uuid");

class QuestionService {
  constructor(QuestionRepository) {
    this.QuestionRepository = QuestionRepository;
  }

  async addQuestion(body) {
    body.id = uuidv4();

    const { id, email, subject, message } = body;

    const question = new Question(id, email, subject, message);
    const questionDocument = question.toDatabaseFormat();

    return await this.QuestionRepository.addQuestion(questionDocument);
  }

  async getAllQuestion() {
    return await this.QuestionRepository.getAll();
  }
}

module.exports = QuestionService;
