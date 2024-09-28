class FAQ {
  constructor(id, userId, question, answer = null) {
    this.id = id;
    this.userId = userId;
    this.question = question;
    this.answer = answer;
  }

  toDatabaseFormat() {
    return {
      _id: this.id,
      userId: this.userId,
      question: this.question,
      answer: this.answer,
    };
  }
}

module.exports = FAQ;
