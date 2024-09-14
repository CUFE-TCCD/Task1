const EventSchema = new Schema(
  {
    _id: {
      type: String, // UUID
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
    },
    createdBy: {
      type: String, // UUID
      ref: "User", // Reference to User table
      default: null, // Zero-to-many relationship
    },
    capacity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
