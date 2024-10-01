class FAQ {
  constructor(id, question, answer) {
    this.id = id;
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
