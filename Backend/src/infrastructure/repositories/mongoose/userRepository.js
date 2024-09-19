const UserModel = require("../../database/mongoose/models/UserSchema");

class UserRepository {
  async create(user) {
    return await UserModel.create(user);
  }

  async getById(id) {
    return await UserModel.findById(id).exec();
  }

  async getAll() {
    return await UserModel.find().exec();
  }
  
  async getByEmail(email) {
    return await UserModel.findOne({ email }).exec();
  }

  async update(id, updatedData) {
    return await UserModel.findByIdAndUpdate(id, updatedData, { new: true }).exec();
  }

  async delete(id) {
    return await UserModel.findByIdAndDelete(id).exec();
  }
}

module.exports = UserRepository;
