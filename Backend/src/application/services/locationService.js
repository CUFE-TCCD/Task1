class LocationService {
  constructor(locationRepository) {
    this.locationRepository = locationRepository;
  }

  async createLocation(locationData) {
    const { id, name, location, capacity, isAvailable } = locationData;
    const locationObj = new Location(id, name, location, capacity, isAvailable);

    return await this.locationRepository.create(locationObj);
  }

  async getLocationById(id) {
    return await this.locationRepository.getById(id);
  }

  async getAllLocations() {
    return await this.locationRepository.getAll();
  }

  async updateLocation(id, updatedLocationData) {
    const location = await this.locationRepository.getById(id);
    if (!location) {
      throw new Error("Location not found.");
    }

    Object.assign(location, updatedLocationData);
    return await this.locationRepository.update(id, location);
  }

  async deleteLocation(id) {
    return await this.locationRepository.delete(id);
  }
}

module.exports = LocationService;
