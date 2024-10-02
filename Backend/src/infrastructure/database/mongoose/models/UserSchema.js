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
        "sponsor",
      ],
      default: "member",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
