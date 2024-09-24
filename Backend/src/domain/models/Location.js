class Location {
  constructor(
    id,
    name,
    address,
    capacity,
    isAvailable = true,
    images = [],
    googleMapsLink = null
  ) {
    this._id = id;
    this.name = name;
    this.address = address;
    this.capacity = capacity;
    this.isAvailable = isAvailable;
    this.images = images;
    this.googleMapsLink = googleMapsLink;
  }

  checkAvailability() {
    return this.isAvailable;
  }
}

module.exports = Location;
