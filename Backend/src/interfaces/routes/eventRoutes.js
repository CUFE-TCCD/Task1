const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/events/registrations", authMiddleware, eventController.getEventRegistrations);
router.get("/events/:eventId/attendance", authMiddleware, eventController.getEventAttendance);
router.post("/event", authMiddleware, eventController.createEvent);
router.get("/events", eventController.getAllEvents);
router.put("/events/:eventId", authMiddleware, eventController.updateEvent);
router.delete("/events/:eventId", authMiddleware, eventController.deleteEvent);

module.exports = router;
