class Feedback {
    constructor(id, userId, eventId, feedback) {
      this.id = id;
      this.userId = userId;
      this.eventId = eventId;
      this.feedback = feedback;
    }
  
    isValid() {
      return this.feedback && this.feedback.length > 0;
    }
  }
  
  module.exports = Feedback;
  