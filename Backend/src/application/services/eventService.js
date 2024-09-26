const { v4: uuidv4 } = require("uuid");
const Event = require("../../domain/models/Event");

class EventService {
  constructor(eventRepository, applicationRepository) {
    this.eventRepository = eventRepository;
    this.applicationRepository = applicationRepository;
  }

  async createEvent(eventData) {
    eventData._id = uuidv4();
    eventData.createdBy = uuidv4();

    const { _id, title, description, date, location, createdBy, capacity } =
      eventData;
    const event = new Event(
      _id,
      title,
      description,
      date,
      location,
      createdBy,
      capacity
    );

    const eventDocument = event.toDatabaseFormat();
    return await this.eventRepository.create(eventDocument);
  }

  async getEventById(id) {
    return await this.eventRepository.getById(id);
  }

  async getAllEvents() {
    const projection = "title description date location createdAt";
    return await this.eventRepository.getAll(projection);
  }

  async updateEvent(eventID, newEvent) {
    const event = await this.eventRepository.update(eventID, newEvent);
    if (!event) {
      const error = new Error("Event not found");
      error.statusCode = 404;
      error.isOperational = true;
      throw error;
    }
    return event;
  }

  async deleteEvent(eventID) {
    const event = await this.eventRepository.delete(eventID);
    if (!event) {
      const error = new Error("Event not found");
      error.statusCode = 404;
      error.isOperational = true;
      throw error;
    }
    return event;
  }

  async getEventRegistrations() {
    return await this.applicationRepository.getAll();
  }
  
  async getEventAttendance() {
    return await this.applicationRepository.getByEventId();
  }

  async getSpecificFinishedEvents() {
    return await this.eventRepository.findFinishedEventsBySpecificNames();
  }
  
}

module.exports = EventService;
