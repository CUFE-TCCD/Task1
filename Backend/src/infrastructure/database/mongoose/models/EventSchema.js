const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const EventSchema = new Schema(
  {
    _id: {
      type: String, // UUID
      required: true,
    },
    title: {
      type: String,
      required: [true, "Title field is required"],
    },
    description: {
      type: String,
      required: [true, "Description field is required"],
    },
    date: {
      type: Date,
      required: [true, "Date field is required"],
    },
    location: {
      type: String,
      required: [true, "Location field is required"],
    },
    createdBy: {
      type: String, // UUID
      ref: "User", // Reference to User table
      default: null, // Zero-to-many relationship
    },
    capacity: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
