const { generateUUID } = require("../utils/generateId");

const defaultPicture =
  "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg";

class UserProfileService {
  constructor(userProfileRepository) {
    this.userProfileRepository = userProfileRepository;
  }

  async createUserProfile(userProfileData) {
    const { userId, cv, gradDate, linkedinProfile, picture } = userProfileData;
    let _id = generateUUID();
    const userProfile = {
      _id,
      userId,
      cv,
      gradDate,
      linkedinProfile,
      picture,
    };

    if (!userProfile.picture) userProfile.picture = defaultPicture;

    return await this.userProfileRepository.create(userProfile);
  }

  async getUserProfileById(id) {
    return await this.userProfileRepository.getById(id);
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
