const express = require("express");
const cors = require("cors");
const eventRoutes = require("./interfaces/routes/eventRoutes");
const userRoutes = require("./interfaces/routes/userRoutes");
const authRoutes = require("./interfaces/routes/authRoutes");
const feedbackRoutes = require("./interfaces/routes/feedbackRoutes");
const locationRoutes = require("./interfaces/routes/locationRoutes");
const container = require("./container/servicesContainer");

const app = express();
app.use((req, res, next) => {
    req.requestScope = new Map();
    req.container = container;
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

module.exports = app;
