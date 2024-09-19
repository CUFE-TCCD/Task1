const EventModel = require("../../database/mongoose/models/EventSchema");

class EventRepository {
  async create(event) {
    return await EventModel.create(event);
  }

  async getById(id) {
    return await EventModel.findById(id).exec();
  }

  async getAll() {
    return await EventModel.find().exec();
  }

  async update(id, updatedData) {
    return await EventModel.findByIdAndUpdate(id, updatedData, { new: true }).exec();
  }

  async delete(id) {
    return await EventModel.findByIdAndDelete(id).exec();
  }
}

module.exports = EventRepository;
