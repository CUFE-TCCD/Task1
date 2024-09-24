const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LocationSchema = new Schema(
  {
    _id: {
      type: String, // UUID
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    images: {
      type: [String], // Array of image URLs
      default: [],
    },
    googleMapsLocation: {
      type: String, // Google Maps location string
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Location", LocationSchema);
