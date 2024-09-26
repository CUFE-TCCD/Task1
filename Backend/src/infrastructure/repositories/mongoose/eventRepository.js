const EventModel = require("../../database/mongoose/models/EventSchema");

class EventRepository {
  async create(event) {
    return await EventModel.create(event);
  }

  async getById(id) {
    return await EventModel.findById(id).exec();
  }

  async getAll(projection = undefined) {
    return await EventModel.find().select(projection);
  }

  async update(id, updatedData) {
    return await EventModel.findByIdAndUpdate(id, updatedData, { new: true });
  }

  async delete(id) {
    return await EventModel.findByIdAndDelete(id);
  }
}

module.exports = EventRepository;
