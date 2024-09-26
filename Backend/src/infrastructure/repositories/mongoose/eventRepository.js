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

  async findLastFinishedEventByName(eventName) {
    const currentDate = new Date();
    return await EventModel.findOne({
      title: eventName,
      date: { $lt: currentDate }
    })
      .sort({ date: -1 })
      .select('title capacity');
  }

  async findFinishedEventsBySpecificNames() {
    const eventNames = ["Job Fair", "Research Day", "Orientation"];
    const events = [];

    for (const name of eventNames) {
      const event = await this.findLastFinishedEventByName(name);
      if (event) {
        events.push(event);
      }
    }

    return events;
  }
}

module.exports = EventRepository;
