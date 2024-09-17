const express = require("express");
const cors = require("cors");
const eventRoutes = require("./routes/eventRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const locationRoutes = require("./routes/locationRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", userRoutes);
app.use("/api/v1", eventRoutes);
app.use("/api/v1", locationRoutes);
app.use("/api/v1", feedbackRoutes);
app.use("/api/v1", postRoutes);
app.use("/api/v1", authRoutes);

module.exports = app;
