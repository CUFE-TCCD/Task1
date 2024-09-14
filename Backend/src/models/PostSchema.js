const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
  _id: {
    type: String,  // UUID
    required: true,
  },
  userId: {
    type: String,  // UUID
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  media: {
    type: Schema.Types.Mixed,  // JSON or array of media URLs
  },
}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);
