const express = require("express");
const cors = require("cors");
const eventRoutes = require("./interfaces/routes/eventRoutes");
const userRoutes = require("./interfaces/routes/userRoutes");
const authRoutes = require("./interfaces/routes/authRoutes");
const feedbackRoutes = require("./interfaces/routes/feedbackRoutes");
const locationRoutes = require("./interfaces/routes/locationRoutes");
const FAQRoutes = require("./interfaces/routes/FAQRoutes");
const container = require("./container/servicesContainer");
const globalErrorHandling = require("./interfaces/controllers/errorController");

const app = express();
app.use((req, res, next) => {
  req.requestScope = new Map();
  req.container = container;
  next();
});

app.use((req, res, next) => {
  req.requstedTime = new Date().toISOString();
  console.log("Request at:", req.requstedTime);
  next();
});
app.use(cors());
app.use(express.json());
app.use("/api/v1", userRoutes);
app.use("/api/v1", eventRoutes);
app.use("/api/v1", locationRoutes);
app.use("/api/v1", feedbackRoutes);
//app.use("/api/v1", postRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", FAQRoutes);

app.use(globalErrorHandling);
module.exports = app;
