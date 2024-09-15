const express = require("express");
const router = express.Router();
const Event = require("../models/EventSchema");
const { v4: uuidv4 } = require("uuid");

// Route to add an event
router.post("/events", async (req, res) => {
  try {
    eventInfo = req.body;

    eventInfo._id = uuidv4();
    eventInfo.createdBy = uuidv4();

    nameValidation(eventInfo.name);

    const event = await Event.create(eventInfo);

    res.status(201).json({
      status: "success",
      data: event,
    });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// Route to update an event
router.put("/events/:id", async (req, res) => {
  try {
    eventID = req.params.id;
    eventInfo = req.body;

    if (eventInfo.name) {
      nameValidation(eventInfo.name);
    }

    const event = await Event.findByIdAndUpdate(eventID, eventInfo, {
      new: true,
    });

    if (!event) {
      const error = new Error("Event not found");
      error.statusCode = 404;
      error.isOperational = true;
      throw error;
    }

    res.status(200).json({
      status: "success",
      data: event,
    });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// Route to delete an event
router.delete("/events/:id", async (req, res) => {
  try {
    eventID = req.params.id;
    const event = await Event.findByIdAndDelete(eventID);

    if (!event) {
      const error = new Error("Event not found");
      error.statusCode = 404;
      error.isOperational = true;
      throw error;
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

const errorHandler = (err, req, res) => {
  if (err.name === "ValidationError") {
    err.statusCode = 400;
    err.isOperational = true;
  }

  err.statusCode = err.statusCode || 500;
  err.status = err.statusCode.toString().startsWith("4") ? "fail" : "error";

  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      error: err,
    });
  }
};

const nameValidation = (name) => {
  const validator = /^[A-Za-z\s]+$/;
  if (!validator.test(name)) {
    const error = new Error("The name must contain characters only");
    error.statusCode = 400;
    error.isOperational = true;
    throw error;
  }
};

module.exports = router;
