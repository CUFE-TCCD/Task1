class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getUserById(id) {
    return await this.userRepository.getById(id);
  }

  async getUserInfo(id) {
    return await this.userRepository.getUserInfo(id);
  }

  async changeRole(email, role) {
    return await this.userRepository.changeRole(email, role);
  }

  async getAllUsers() {
    return await this.userRepository.getAll();
  }

  async getCount() {
    return await this.userRepository.getCountByRole();
  }

  async updateUser(id, updatedUserData) {
    const user = await this.userRepository.getById(id);
    if (!user) {
      throw new Error("User not found.");
    }

    Object.assign(user, updatedUserData);
    return await this.userRepository.update(id, user);
  }

  async deleteUser(id) {
    return await this.userRepository.delete(id);
  }
}

module.exports = UserService;
