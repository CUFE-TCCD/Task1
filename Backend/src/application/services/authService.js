const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../infrastructure/config/jwtConfig");

class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async register(userDetails) {
    const { email, password } = userDetails;

    const existingUser = await this.userRepository.getByEmail(email);
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      ...userDetails,
      password: hashedPassword,
    };

    return await this.userRepository.create(newUser);
  }

  async login(email, password) {
    const user = await this.userRepository.getByEmail(email);
    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, config.jwtSecret, { expiresIn: "1h" });

    return { token };
  }

  async getUserById(userId) {
    return await this.userRepository.getById(userId);
  }
}

module.exports = AuthService;
