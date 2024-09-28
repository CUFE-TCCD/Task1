const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EventBookmark = new Schema(
    {
        _id: {
            type: String, // UUID
            required: true,
        },
        userId: {
            type: String, // UUID
            ref: "User",
            required: true,
        },
        eventId: {
            type: String, // UUID
            ref: "Event",
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("EventBookmark", EventBookmark);
