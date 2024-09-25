const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FeedbackSchema = new Schema(
  {
    _id: {
      type: String, // UUID
      required: true,
    },
    userId: {
      type: String, // UUID
      ref: "User",
      required: true,
    },
    eventId: {
      type: String, // UUID
      ref: "Event",
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    type: {
      type: Boolean, // 0 for negative and 1 for positive
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", FeedbackSchema);
