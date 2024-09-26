const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const authMiddleware = require("../middlewares/authMiddleware");
const titleValidation = require("../middlewares/eventTitleValidation");

router.get("/events/:eventId/registrations", authMiddleware, eventController.getEventRegistrations);
router.get("/events/:eventId/attendance", authMiddleware, eventController.getEventAttendance);
router.post("/event", titleValidation, eventController.createEvent);
router.get("/events", eventController.getAllEvents);
router.put("/events/:eventId", titleValidation, eventController.updateEvent);
router.delete("/events/:eventId",  eventController.deleteEvent);
router.get('/events/finished', eventController.getFinishedEvents);


module.exports = router;
