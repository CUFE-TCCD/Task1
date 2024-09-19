const LocationModel = require("../../database/mongoose/models/LocationSchema");

class LocationRepository {
  async create(location) {
    return await LocationModel.create(location);
  }

  async getById(id) {
    return await LocationModel.findById(id).exec();
  }

  async getAll() {
    return await LocationModel.find().exec();
  }

  async update(id, updatedData) {
    return await LocationModel.findByIdAndUpdate(id, updatedData, { new: true }).exec();
  }

  async delete(id) {
    return await LocationModel.findByIdAndDelete(id).exec();
  }
}

module.exports = LocationRepository;
