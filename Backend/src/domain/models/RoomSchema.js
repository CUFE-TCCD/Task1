const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RoomSchema = new Schema(
  {
    _id: {
      type: String, // UUID
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    location: {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);
