const EventBookmarkModel = require("../../database/mongoose/models/EventBookmarkSchema");
const EventModel = require("../../database/mongoose/models/EventSchema")

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

    async getEventsByUserId(userId) {
        const bookmarks = await EventBookmarkModel.find({ userId: userId });
        const events = await Promise.all(
            bookmarks.map(async bookmark => await EventModel.findById(bookmark.eventId))
        )

        return events;
    }

    async getAll() {
        return await EventBookmarkModel.find().exec();
    }

    async delete(id) {
        return await EventBookmarkModel.findByIdAndDelete(id).exec();
    }
}

module.exports = EventBookmarkRepository;
