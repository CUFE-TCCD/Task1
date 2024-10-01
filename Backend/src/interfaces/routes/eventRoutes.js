const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const authMiddleware = require("../middlewares/authMiddleware");
const titleValidation = require("../middlewares/eventTitleValidation");
const roleValidation = require("../middlewares/roleValidation");

router.post(
  "/event",
  authMiddleware,
  roleValidation("president", "head", "vice_head", "vice_president", "admin"),
  titleValidation,
  eventController.createEvent
);

router.get(
  "/events/registrations",
  authMiddleware,
  eventController.getEventRegistrations
);

router.get(
  "/events/:eventId/attendance",
  authMiddleware,
  eventController.getEventAttendance
);

router.get("/events", eventController.getAllEvents);

router
  .route("/events/:eventId")
  .put(
    authMiddleware,
    roleValidation("president", "head", "vice_head", "vice_president", "admin"),
    titleValidation,
    eventController.updateEvent
  )
  .delete(
    authMiddleware,
    roleValidation("president", "head", "vice_head", "vice_president", "admin"),
    eventController.deleteEvent
  );

router.get("/events/finished", eventController.getFinishedEvents);

router.post('/events/:eventId/apply', authMiddleware, eventController.applyToEvent);

module.exports = router;
