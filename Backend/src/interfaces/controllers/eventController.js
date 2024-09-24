const container = require("../../container/servicesContainer");
const EventService = container.resolve('EventService');

const getEventRegistrations = async (req, res) => {
  const {eventId} = req.params;
  try {
    const EventService = req.container.resolve('EventService', new Set(), req.requestScope);
    const registrations = await EventService.getEventRegistrations(eventId);
    res.status(200).json(registrations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get event registrations" });
  }
};

const getEventAttendance = async (req, res) => {
  const { eventId } = req.params;
  try {
    const EventService = req.container.resolve('EventService', new Set(), req.requestScope);
    const attendance = await EventService.getEventAttendance(eventId);
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ error: `Failed to get attendance for event ${eventId}` });
  }
};

const createEvent = async (req, res, next) => {
  try {
    const EventService = req.container.resolve(
      "EventService",
      new Set(),
      req.requestScope
    );
    const eventData = req.body;
    const EventService = req.container.resolve('EventService', new Set(), req.requestScope);
    // console.log("ASDASD");
    // console.log(EventService);
    const newEvent = await EventService.createEvent(eventData);
    res.status(201).json(newEvent);
  } catch (err) {
    next(err);
  }
};

const getAllEvents = async (req, res, next) => {
  try {
    const EventService = req.container.resolve(
      "EventService",
      new Set(),
      req.requestScope
    );
    const events = await EventService.getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    next(error);
  }
};

const updateEvent = async (req, res, next) => {
  const { eventId } = req.params;
  try {
    const EventService = req.container.resolve(
      "EventService",
      new Set(),
      req.requestScope
    );
    const updatedEvent = await EventService.updateEvent(eventId, req.body);
    res.status(200).json(updatedEvent);
  } catch (error) {
    next(error);
  }
};

const deleteEvent = async (req, res, next) => {
  const { eventId } = req.params;
  try {
    const EventService = req.container.resolve(
      "EventService",
      new Set(),
      req.requestScope
    );
    await EventService.deleteEvent(eventId);
    res.status(202).json({ success: true, message: "Event deleted successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getEventRegistrations,
  getEventAttendance,
  createEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
};
