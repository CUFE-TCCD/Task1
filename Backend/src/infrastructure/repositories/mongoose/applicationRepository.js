const ApplicationModel = require("../../database/mongoose/models/ApplicationSchema");

class ApplicationRepository {
  async create(application) {
    return await ApplicationModel.create(application);
  }

  async getById(id) {
    return await ApplicationModel.findById(id).exec();
  }

  async getByUserEvent(userId, eventId) {
    return await ApplicationModel.findOne({ userId, eventId }).exec();
  }

  async getAll() {
    return await ApplicationModel.find().select("-attended -_id");
  }

  async update(id, updatedData) {
    return await ApplicationModel.findByIdAndUpdate(id, updatedData, { new: true }).exec();
  }

  async delete(id) {
    return await ApplicationModel.findByIdAndDelete(id).exec();
  }
  async getByEventId(eventId) {
    return await ApplicationModel.find({ eventId }).exec();
  }
}

module.exports = ApplicationRepository;
