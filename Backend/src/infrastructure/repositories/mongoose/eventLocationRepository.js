const EventLocationModel = require("../../database/mongoose/models/EventLocationSchema");

class EventLocationRepository {
  async create(eventLocation) {
    return await EventLocationModel.create(eventLocation);
  }

  async getById(id) {
    return await EventLocationModel.findById(id).exec();
  }

  async getAll() {
    return await EventLocationModel.find().exec();
  }

  async update(id, updatedData) {
    return await EventLocationModel.findByIdAndUpdate(id, updatedData, { new: true }).exec();
  }

  async delete(id) {
    return await EventLocationModel.findByIdAndDelete(id).exec();
  }
}

module.exports = EventLocationRepository;
