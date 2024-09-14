const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserProfileSchema = new Schema({
  _id: {
    type: String, // UUID
    required: true,
  },
  userId: {
    type: String, // UUID
    ref: "User",
    unique: true,
    required: true,
  },
  cv: {
    type: String, // URL
  },
  gradDate: {
    type: Date,
  },
  linkedinProfile: {
    type: String,
  },
  picture: {
    type: String, // URL
  },
});

module.exports = mongoose.model("UserProfile", UserProfileSchema);
