const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EventRoomSchema = new Schema({
  _id: {
    type: String,  // UUID
    required: true,
  },
  eventId: {
    type: String,  // UUID
    ref: "Event",
    required: true,
  },
  roomId: {
    type: String,  // UUID
    ref: "Room",
    required: true,
  },
});

module.exports = mongoose.model("EventRoom", EventRoomSchema);
