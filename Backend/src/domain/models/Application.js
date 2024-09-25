class Application {
  constructor(id, userId, eventId, status = "pending", qrCodeUrl, appliedAt) {
    this.id = id;
    this.userId = userId;
    this.eventId = eventId;
    this.status = status;
    this.qrCodeUrl = qrCodeUrl;
    this.appliedAt = appliedAt;
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
