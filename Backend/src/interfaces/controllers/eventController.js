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

const createEvent = async (req, res) => {
  try {
    const eventData = req.body;
    const EventService = req.container.resolve('EventService', new Set(), req.requestScope);
    // console.log("ASDASD");
    // console.log(EventService);
    const newEvent = await EventService.createEvent(eventData);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: "Failed to create event" });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await EventService.getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Failed to get events" });
  }
};

const updateEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    const updatedEvent = await EventService.updateEvent(eventId, req.body);
    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: `Failed to update event ${eventId}` });
  }
};

const deleteEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    await EventService.deleteEvent(eventId);
    res.status(202).json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: `Failed to delete event ${eventId}` });
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
