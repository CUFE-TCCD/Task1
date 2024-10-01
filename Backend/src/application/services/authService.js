const { generateToken, hashPassword, comparePassword, validateEmail, generateResetToken, sendResetTokenEmail, validateResetToken } = require("../utils/authUtils");
const EmailService = require("../utils/email");
const { generateUUID } = require("../utils/generateId");

class AuthService {
  constructor(userRepository) {
    this.userRepository = userRepository;
    this.emailService = new EmailService();
  }

  async signup(userDetails) {
    const { email, password, firstname, lastname } = userDetails;

    // Check that fields are not empty
    if (!email || !password || !firstname || !lastname) {
      throw new Error("Missing required fields: email, password, firstName, or lastName.");
    }

    // Validate Email address
    if (!validateEmail(email)) {
      throw new Error("Invalid Email address");
    }

    // Check password length
    if (password.length < 8) {
      console.log(password.length)
      throw new Error("Password should be at least 8 characters");
    }

    // Check if user already exist
    const existingUser = await this.userRepository.getByEmail(email);
    if (existingUser) {
      throw new Error("User already exists");
    }
    const firstName = firstname;
    const lastName = lastname;
    const userDetailsDTO = { email, password, firstName, lastName };
    let newUser = {
      _id: generateUUID(),
      ...userDetailsDTO,
      password: await hashPassword(password),
    };
    newUser = await this.userRepository.create(newUser);

    this.emailService.sendSignupEmail(
      email, firstName
    ).then(res => {
      console.log("Sent sucessfully")
      console.log(res);
    }).catch(err => {
      console.log("Error sending an email")
      console.log(err)
    });

    return generateToken(newUser);
  }

  async login(email, password) {
    // Validate Email address
    if (!validateEmail(email)) {
      throw new Error("Invalid Email address");
    }

    const user = await this.userRepository.getByEmail(email);
    if (!user) {
      throw new Error("Invalid email");
    }

    if (!await comparePassword(password, user.password)) {
      throw new Error("Invalid password");
    }

    return generateToken(user);
  }

  async changePassword(userId, password, newPassword) {
    const user = await this.userRepository.getById(userId);

    if (!await comparePassword(password, user.password)) {
      throw new Error("Invalid password");
    }

    // Check password length
    if (!(password.length < 8)) {
      throw new Error("Password should be at least 8 characters");
    }

    this.userRepository.update(userId, { password: await hashPassword(newPassword) });

    return generateToken(user);
  }

  async sendResetToken(email) {
    // Validate Email address
    if (!validateEmail(email)) {
      throw new Error("Invalid Email address");
    }

    const user = await this.userRepository.getByEmail(email);
    if (user) {
      // Generate token
      const token = generateResetToken(user)
      sendResetTokenEmail(token)

      console.log("Email sent successfully");
    } else {
      console.log("Email not found");
    }
  }

  async resetPassword(token, password) {
    const userId = validateResetToken(token)

    // Invalid token
    if (!userId) {
      throw new Error("Invalid or expired token");
    }

    // Check password length
    if (!(password.length < 8)) {
      throw new Error("Password should be at least 8 characters");
    }

    // Reset password
    this.userRepository.update(userId, { password: await hashPassword(password) });

    // Sign in and send token
    const user = await this.userRepository.getById(userId);
    return generateToken(user);
  }

  async getUserById(userId) {
    return await this.userRepository.getById(userId);
  }
}

module.exports = AuthService;
