const { changeRole } = require("../../../interfaces/controllers/userController");
const UserModel = require("../../database/mongoose/models/UserSchema");

class UserRepository {
  async create(user) {
    return await UserModel.create(user);
  }

  async getById(id) {
    return await UserModel.findById(id).exec();
  }

  async getUserInfo(id) {
    return await UserModel.findById(id).select("-password").exec();
  }
  
  async getAll() {
    return await UserModel.find().exec();
  }
  
  async changeRole(email, role) {
    return await UserModel.findOneAndUpdate({email}, {$set:{role:role}});
  }

  async getCountByRole() {
    const roleCounts = await UserModel.aggregate([
      {
        $group: {
          _id: '$role',        // Group by the 'role' field
          count: { $sum: 1 }   // Count the number of documents in each group
        }
      }
    ]).exec();
  
    // Initialize an empty counts object
    const counts = {};
  
    // Populate the counts object based on the aggregated result
    roleCounts.forEach(role => {
      counts[role._id] = role.count;
    });
  
    return counts;
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
