const mongoose = require("mongoose");

const schema = mongoose.Schema;
const QuestionSchema = new schema(
  {
    _id: {
      type: String, // UUID
      required: true,
    },
    email: {
      type: String,
      required: [true, "The Email field is required"],
    },
    subject: {
      type: String,
      required: [true, "The Subject field is required"],
    },
    message: {
      type: String,
      required: [true, "The Message field is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Question", QuestionSchema);
