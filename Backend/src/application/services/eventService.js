class EventService {
  constructor(eventRepository) {
    this.eventRepository = eventRepository;
  }

  async createEvent(eventData) {
    const { id, name, description, date, createdBy, capacity } = eventData;
    const event = new Event(id, name, description, date, createdBy, capacity);

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
}

module.exports = EventService;
