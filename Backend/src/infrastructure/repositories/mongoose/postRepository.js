const PostModel = require("../../database/mongoose/models/PostSchema");

class PostRepository {
  async create(post) {
    return await PostModel.create(post);
  }

  async getById(id) {
    return await PostModel.findById(id).exec();
  }

  async getAll() {
    return await PostModel.find().exec();
  }

  async update(id, updatedData) {
    return await PostModel.findByIdAndUpdate(id, updatedData, { new: true }).exec();
  }

  async delete(id) {
    return await PostModel.findByIdAndDelete(id).exec();
  }
}

module.exports = PostRepository;
