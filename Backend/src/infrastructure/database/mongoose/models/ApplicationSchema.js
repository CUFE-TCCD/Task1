const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ApplicationSchema = new Schema(
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
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    qrCodeUrl: {
      type: String,
      required: true,
    },
    attended: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: { createdAt: "appliedAt" } }
);

module.exports = mongoose.model("Application", ApplicationSchema);
