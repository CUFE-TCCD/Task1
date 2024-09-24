const LocationModel = require("../../database/mongoose/models/LocationSchema");

class LocationRepository {
  async create(location) {
    return await LocationModel.create(location);
  }

  async getById(id) {
    return await LocationModel.findById(id);
  }

  async getAll() {
    return await LocationModel.find();
  }

  async update(id, updatedData) {
    return await LocationModel.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });
  }

  async delete(id) {
    return await LocationModel.findByIdAndDelete(id);
  }
}

module.exports = LocationRepository;
