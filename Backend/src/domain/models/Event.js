class Event {
  constructor(id, name, description, date, createdBy, capacity) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.date = date;
    this.createdBy = createdBy;
    this.capacity = capacity;
  }

  isUpcoming() {
    return this.date > new Date();
  }
}

module.exports = Event;
