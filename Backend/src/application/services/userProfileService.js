class UserProfileService {
  constructor(userProfileRepository) {
    this.userProfileRepository = userProfileRepository;
  }

  async createUserProfile(userProfileData) {
    const { id, userId, cv, gradDate, linkedinProfile, picture } = userProfileData;
    const userProfile = new UserProfile(id, userId, cv, gradDate, linkedinProfile, picture);

    return await this.userProfileRepository.create(userProfile);
  }

  async getUserProfileById(id) {
    return await this.userProfileRepository.getById(id);
  }

  async getUserPic(userId) {
    return await this.userProfileRepository.getUserPic(userId);
  }

  async updateUserProfile(id, updatedProfileData) {
    const profile = await this.userProfileRepository.getById(id);
    if (!profile) {
      throw new Error("User profile not found.");
    }

    Object.assign(profile, updatedProfileData);
    return await this.userProfileRepository.update(id, profile);
  }

  async deleteUserProfile(id) {
    return await this.userProfileRepository.delete(id);
  }
}

module.exports = UserProfileService;
