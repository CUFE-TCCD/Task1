const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../infrastructure/config/jwtConfig");
const { generateUUID } = require("../utils/generateId");

class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async signup(userDetails) {
    const { email, password, firstName, lastName } = userDetails;

    if (!email || !password || !firstName || !lastName) {
      throw new Error("Missing required fields: email, password, firstName, or lastName.");
    }

    const existingUser = await this.userRepository.getByEmail(email);
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      _id: generateUUID(),
      ...userDetails,
      password: hashedPassword,
    };
    await this.userRepository.create(newUser);

    //const token = jwt.sign({ userId: newUser._id, role: "member" }, config.secret, { expiresIn: "1h" });
    const token = jwt.sign({ userId: newUser._id, role: "member" }, "14d0d32a3a9eefd976ac12172360daf11cb7683a5fd6ddb1cfff570f6f473934", { expiresIn: "1h" });
    return token;
  }

  async login(email, password) {
    const user = await this.userRepository.getByEmail(email);
    if (!user) {
      throw new Error("Invalid email");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid password");
    }

    //const token = jwt.sign({ userId: user._id, role: user.role }, config.jwtSecret, { expiresIn: "1h" });
    const token = jwt.sign({ userId: user._id, role: user.role }, "14d0d32a3a9eefd976ac12172360daf11cb7683a5fd6ddb1cfff570f6f473934", { expiresIn: "1h" });

    return token;
  }

  async getUserById(userId) {
    return await this.userRepository.getById(userId);
  }
}

module.exports = AuthService;
