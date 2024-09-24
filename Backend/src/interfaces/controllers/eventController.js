const getEventRegistrations = async (req, res) => {
  try {
    const EventService = req.container.resolve('EventService', new Set(), req.requestScope);
    const registrations = await EventService.getEventRegistrations();
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
    const UserService = req.container.resolve('UserService', new Set(), req.requestScope);

    const attendances = await EventService.getEventAttendance(eventId);
    
    let response = [];

    for(attendance in attendances)
    {
      let userId = attendances[attendance].userId;
      let user = await UserService.getUserById(userId);
      response.push({name: user.firstName + " " + user.lastName, status: attendances[attendance].attended ? "attended" : "absent"});
    }

    res.status(200).json(response);
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
