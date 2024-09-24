const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const authMiddleware = require("../middlewares/authMiddleware");
const titleValidation = require("../middlewares/eventTitleValidation");

router.get("/events/:eventId/registrations", authMiddleware, eventController.getEventRegistrations);
router.get("/events/:eventId/attendance", authMiddleware, eventController.getEventAttendance);
router.post("/event", authMiddleware,titleValidation, eventController.createEvent);
router.get("/events", eventController.getAllEvents);
router.put("/events/:eventId", authMiddleware,titleValidation, eventController.updateEvent);
router.delete("/events/:eventId", authMiddleware, eventController.deleteEvent);

module.exports = router;
