class Location {
  constructor(id, name, location, capacity, isAvailable = true) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.capacity = capacity;
    this.isAvailable = isAvailable;
  }

  checkAvailability() {
    return this.isAvailable;
  }
}

module.exports = Location;
