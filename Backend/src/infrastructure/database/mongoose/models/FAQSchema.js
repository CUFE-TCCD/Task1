const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const FAQSchema = new Schema({
  _id: {
    type: String, // UUID
    required: true,
  },
  question: {
    type: String,
    required: [true, "The Question field is required"],
  },
  answer: {
    type: String,
  },
});

module.exports = mongoose.model("FAQ", FAQSchema);
