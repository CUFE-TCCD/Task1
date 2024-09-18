class EventLocationService {
  constructor(eventLocationRepository) {
    this.eventLocationRepository = eventLocationRepository;
  }

  async createEventLocation(eventLocationData) {
    const { id, eventId, roomId } = eventLocationData;
    const eventLocation = new EventLocation(id, eventId, roomId);

    if (!eventLocation.isValid()) {
      throw new Error("Invalid event location data.");
    }

    return await this.eventLocationRepository.create(eventLocation);
  }

  async getEventLocationById(id) {
    const eventLocation = await this.eventLocationRepository.getById(id);
    if (!eventLocation) {
      throw new Error("Event location not found.");
    }
    return eventLocation;
  }

  async deleteEventLocation(id) {
    return await this.eventLocationRepository.delete(id);
  }
}

module.exports = EventLocationService;
