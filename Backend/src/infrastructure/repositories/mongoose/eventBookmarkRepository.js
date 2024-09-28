const EventBookmarkModel = require("../../database/mongoose/models/EventBookmarkSchema");

class EventBookmarkRepository {
    async create(eventBookmark) {
        return await EventBookmarkModel.create(eventBookmark);
    }

    async get(eventId, userId) {
        return await EventBookmarkModel.findOne({ eventId: eventId, userId: userId }).exec();
    }

    async getById(id) {
        return await EventBookmarkModel.findById(id).exec();
    }

    async getByEventId(eventId) {
        return await EventBookmarkModel.find({ eventId: eventId }).exec();
    }

    async getByUserId(userId) {
        return await EventBookmarkModel.find({ userId: userId }).exec();
    }

    async getAll() {
        return await EventBookmarkModel.find().exec();
    }

    async delete(id) {
        return await EventBookmarkModel.findByIdAndDelete(id).exec();
    }
}

module.exports = EventBookmarkRepository;
