class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async createUser(userData) {
    const { id, firstName, lastName, email, password, role } = userData;
    const user = new User(id, firstName, lastName, email, password, role);

    return await this.userRepository.create(user);
  }

  async getUserById(id) {
    return await this.userRepository.getById(id);
  }

  async getAllUsers() {
    return await this.userRepository.getAll();
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
