const { v4: uuidv4 } = require("uuid");
const EventBookmark = require("../../domain/models/EventBookmark");

class EventBookmarkService {
    constructor(eventBookmarkRepository) {
        this.eventBookmarkRepository = eventBookmarkRepository;
    }

    async addBookmark(eventId, userId) {
        if (!await this.eventBookmarkRepository.get(eventId, userId)) {
            const id = uuidv4();
            const bookmark = new EventBookmark(id, eventId, userId);
            await this.eventBookmarkRepository.create(bookmark);
        }

        return { "bookmark": true };
    }

    async removeBookmark(eventId, userId) {
        const bookmark = await this.eventBookmarkRepository.get(eventId, userId);
        if (bookmark) {
            await this.eventBookmarkRepository.delete(bookmark._id);
        }

        return { "bookmark": false };
    }

    async getBookmarkedEvents(userId) {
        const events = await this.eventBookmarkRepository.getEventsByUserId(userId);

        return { events };
    }
}

module.exports = EventBookmarkService;