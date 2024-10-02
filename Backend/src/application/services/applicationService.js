const { generateUUID } = require("../utils/generateId");
const Application = require("../../domain/models/Application");

class ApplicationService {
  constructor(applicationRepository) {
    this.applicationRepository = applicationRepository;
  }

  async createApplication(applicationData) {
    const { userId, eventId, qrCodeUrl = "QR" } = applicationData;
    const id = generateUUID();
    const application = new Application(id, userId, eventId, qrCodeUrl);
    return await this.applicationRepository.create(application);
  }

  async checkApplicationExist(userId, eventId) {
    return await this.applicationRepository.getByUserEvent(userId, eventId);
  }

  async getApplicationById(id) {
    return await this.applicationRepository.getById(id);
  }

  async approveApplication(id) {
    const application = await this.applicationRepository.getById(id);
    if (!application) {
      throw new Error("Application not found.");
    }
    application.approve();
    return await this.applicationRepository.update(id, application);
  }

  async rejectApplication(id) {
    const application = await this.applicationRepository.getById(id);
    if (!application) {
      throw new Error("Application not found.");
    }
    application.reject();
    return await this.applicationRepository.update(id, application);
  }
}

module.exports = ApplicationService;
