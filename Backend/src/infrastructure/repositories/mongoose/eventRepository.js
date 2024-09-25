const EventModel = require("../../database/mongoose/models/EventSchema");

class EventRepository {
  async create(event) {
    return await EventModel.create(event);
  }

  async getById(id) {
    return await EventModel.findById(id).exec();
  }

  async getAll() {
    return await EventModel.find().select(
      "title description date location createdAt -_id"
    );
  }

  async update(id, updatedData) {
    return await EventModel.findByIdAndUpdate(id, updatedData, { new: true });
  }

  async delete(id) {
    return await EventModel.findByIdAndDelete(id);
  }
}

module.exports = EventRepository;
