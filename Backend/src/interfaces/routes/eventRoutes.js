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
router.put("/events/:eventId", authMiddleware,titleValidation, eventController.updateEvent);
router.delete("/events/:eventId", authMiddleware, eventController.deleteEvent);
router.get('/events/finished', eventController.getFinishedEvents);


router.post('/events/:eventId/bookmark', authMiddleware, eventController.bookmarkEvent);
router.post('/events/:eventId/remove-bookmark', authMiddleware, eventController.removeBookmark)
router.get('/events/bookmarks', authMiddleware, eventController.getBookmarkedEvents);
module.exports = router;
