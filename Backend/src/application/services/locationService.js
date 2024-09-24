class LocationService {
  constructor(locationRepository) {
    this.locationRepository = locationRepository;
  }

  async createLocation(locationData) {
    const { id, name, address, capacity, available } = locationData;
    const locationObj = new Location(id, name, location = address, capacity, isAvailable = available);

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
