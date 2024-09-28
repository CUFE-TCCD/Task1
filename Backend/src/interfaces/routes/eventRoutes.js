const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const authMiddleware = require("../middlewares/authMiddleware");
const titleValidation = require("../middlewares/eventTitleValidation");
const roleValidation = require("../middlewares/roleValidation");

router.get(
  "/events/:eventId/registrations",
  authMiddleware,
  eventController.getEventRegistrations
);

router.get(
  "/events/:eventId/attendance",
  authMiddleware,
  eventController.getEventAttendance
);

router.post(
  "/event",
  authMiddleware,
  roleValidation("president", "head", "vice_head", "vice_president", "admin"),
  titleValidation,
  eventController.createEvent
);

router.get("/events/registrations", authMiddleware, eventController.getEventRegistrations);
router.get("/events/:eventId/attendance", authMiddleware, eventController.getEventAttendance);
router.post("/event", authMiddleware,titleValidation, eventController.createEvent);

router.get("/events", eventController.getAllEvents);

router.put(
  "/events/:eventId",
  authMiddleware,
  roleValidation("president", "head", "vice_head", "vice_president", "admin"),
  titleValidation,
  eventController.updateEvent
);

router.delete(
  "/events/:eventId",
  authMiddleware,
  roleValidation("president", "head", "vice_head", "vice_president", "admin"),
  eventController.deleteEvent
);

router.get("/events/finished", eventController.getFinishedEvents);

module.exports = router;
