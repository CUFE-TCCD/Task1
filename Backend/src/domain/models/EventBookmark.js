class EventBookmark {
    constructor(id, eventId, userId) {
        this._id = id;
        this.eventId = eventId;
        this.userId = userId;
    }

    isValid() {
        return this.eventId && this.userId;
    }
}

module.exports = EventBookmark;
