class EventService {
  constructor(eventRepository, applicationRepository) {
    this.eventRepository = eventRepository;
    this.applicationRepository = applicationRepository;
  }

  async createEvent(eventData) {
    const { id, name, description, date, createdBy, capacity } = eventData;
    const event = new Event(id, name, description, date, createdBy, capacity);
    console.log("sadads");
    return await this.eventRepository.create(event);
  }

  async getEventById(id) {
    return await this.eventRepository.getById(id);
  }

  async getAllEvents() {
    return await this.eventRepository.getAll();
  }

  async updateEvent(id, updatedEventData) {
    const event = await this.eventRepository.getById(id);
    if (!event) {
      throw new Error("Event not found.");
    }

    Object.assign(event, updatedEventData);
    return await this.eventRepository.update(id, event);
  }

  async deleteEvent(id) {
    return await this.eventRepository.delete(id);
  }
  async getEventRegistrations(eventId) {
    return await this.applicationRepository.getByEventId(eventId);
  }
  async getEventAttendance(eventId) {
    return await this.applicationRepository.getAttendenceByEventId(eventId);
  }
}

module.exports = EventService;
