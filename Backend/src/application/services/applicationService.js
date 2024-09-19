class ApplicationService {
  constructor(applicationRepository) {
    this.applicationRepository = applicationRepository;
  }

  async createApplication(applicationData) {
    const { id, userId, eventId, status, qrCodeUrl } = applicationData;
    const application = new Application(id, userId, eventId, status, qrCodeUrl);

    return await this.applicationRepository.create(application);
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
