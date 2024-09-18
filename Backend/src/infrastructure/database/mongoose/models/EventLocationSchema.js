const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EventLocationSchema = new Schema({
  _id: {
    type: String, // UUID
    required: true,
  },
  eventId: {
    type: String, // UUID
    ref: "Event",
    required: true,
  },
  roomId: {
    type: String, // UUID
    ref: "Location",
    required: true,
  },
});

module.exports = mongoose.model("EventLocation", EventLocationSchema);
