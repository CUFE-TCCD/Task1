const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    _id: {
      type: String, //UUID
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: [
        "president",
        "head",
        "vice_head",
        "vice_president",
        "administration",
        "member",
      ],
      default: "member",
    },
    // indicator to indicate if the user is a sponsor
    // true -> sponsor
    sponsor: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
