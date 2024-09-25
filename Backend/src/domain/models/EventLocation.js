class EventLocation {
    constructor(id, eventId, roomId) {
      this.id = id;
      this.eventId = eventId;
      this.roomId = roomId;
    }
  
    isValid() {
      return this.eventId && this.roomId;
    }
  }
  
  module.exports = EventLocation;
  