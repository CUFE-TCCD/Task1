class PostService {
  constructor(postRepository) {
    this.postRepository = postRepository;
  }

  async createPost(postData) {
    const { id, userId, title, content, media } = postData;
    const post = new Post(id, userId, title, content, media);

    return await this.postRepository.create(post);
  }

  async getPostById(id) {
    return await this.postRepository.getById(id);
  }

  async getAllPosts() {
    return await this.postRepository.getAll();
  }

  async updatePost(id, updatedPostData) {
    const post = await this.postRepository.getById(id);
    if (!post) {
      throw new Error("Post not found.");
    }

    Object.assign(post, updatedPostData);
    return await this.postRepository.update(id, post);
  }

  async deletePost(id) {
    return await this.postRepository.delete(id);
  }
}

module.exports = PostService;
