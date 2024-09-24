class Event {
  constructor(id, title, description, date, location, createdBy, capacity) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.location = location;
    this.createdBy = createdBy;
    this.capacity = capacity;
  }

  isUpcoming() {
    return this.date > new Date.now();
  }

  toDatabaseFormat() {
    return {
      _id: this.id,
      title: this.title,
      description: this.description,
      date: this.date,
      location: this.location,
      createdBy: this.createdBy,
      capacity: this.capacity,
    };
  }
}

module.exports = Event;
