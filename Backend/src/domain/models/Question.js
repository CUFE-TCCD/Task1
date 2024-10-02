class Question {
  constructor(id, email, subject, message) {
    this.id = id;
    this.email = email;
    this.subject = subject;
    this.message = message;
  }

  toDatabaseFormat() {
    return {
      _id: this.id,
      email: this.email,
      subject: this.subject,
      message: this.message,
    };
  }
}

module.exports = Question;
