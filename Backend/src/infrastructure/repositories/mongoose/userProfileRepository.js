const UserProfileModel = require("../../database/mongoose/models/UserProfileSchema");

class UserProfileRepository {
  async create(userProfile) {
    return await UserProfileModel.create(userProfile);
  }

  async getById(id) {
    return await UserProfileModel.findById(id).exec();
  }

  async getAll() {
    return await UserProfileModel.find().exec();
  }

  async update(id, updatedData) {
    return await UserProfileModel.findByIdAndUpdate(id, updatedData, {
      new: true,
    }).exec();
  }

  async delete(id) {
    return await UserProfileModel.findByIdAndDelete(id).exec();
  }
}

module.exports = UserProfileRepository;
