class Application {
  constructor(id, userId, eventId, qrCodeUrl) {
    this._id = id;
    this.userId = userId;
    this.eventId = eventId;
    this.qrCodeUrl = qrCodeUrl;
  }

  approve() {
    this.status = "approved";
  }

  reject() {
    this.status = "rejected";
  }

  isPending() {
    return this.status === "pending";
  }
}

module.exports = Application;
