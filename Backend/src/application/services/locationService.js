const { v4: uuidv4 } = require("uuid");
const Location = require("../../domain/models/Location");

class LocationService {
  constructor(locationRepository) {
    this.locationRepository = locationRepository;
  }

  async createLocation(locationData) {
    locationData._id = uuidv4();
    const {
      _id,
      name,
      address,
      capacity,
      isAvailable,
      images,
      googleMapsLink,
    } = locationData;
    const locationObj = new Location(
      _id,
      name,
      address,
      capacity,
      isAvailable,
      images,
      googleMapsLink
    );

    return await this.locationRepository.create(locationObj);
  }

  async getLocationById(id) {
    return await this.locationRepository.getById(id);
  }

  async getAllLocations() {
    return await this.locationRepository.getAll();
  }

  async updateLocation(id, updatedLocationData) {
    return await this.locationRepository.update(id, updatedLocationData);
  }

  async deleteLocation(id) {
    return await this.locationRepository.delete(id);
  }
}

module.exports = LocationService;
