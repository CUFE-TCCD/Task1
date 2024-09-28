const container = require("../../container/servicesContainer");
const AuthService = container.resolve("AuthService");
const userProfileService = container.resolve("UserProfileService");
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { token, role } = await AuthService.login(email, password);
    res.status(200).json({ token, role });
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Invalid email / password" });
  }
};

const signup = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    role,
    cv,
    linkedinProfile,
    picture,
    gradDate,
  } = req.body;
  const userDetails = {
    firstName,
    lastName,
    email,
    password,
    role,
    cv,
    linkedinProfile,
    picture,
    gradDate,
  };
  try {
    const token = await AuthService.signup(userDetails);

    res.status(201).json({ token, role });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to register user" });
  }
};

const createProfile = async (req, res) => {
  const { userId, cv, picture, gradDate, linkedinProfile } = req.body;
  const profileDetails = { userId, cv, picture, gradDate, linkedinProfile };
  try {
    console.log(AuthService, userProfileService);
    const newProfile = await userProfileService.createUserProfile(
      profileDetails
    );

    res.status(201).send("profile created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create profile" });
  }
};

const changePassword = async (req, res) => {
  const { password, newPassword } = req.body;
  try {
    const token = await AuthService.changePassword(
      req.user.id,
      password,
      newPassword
    );
    res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Couldn't update password, please check your inputs" });
  }
};

const sendResetToken = async (req, res) => {
  const { email } = req.body;
  try {
    await AuthService.sendResetToken(email);
    res.status(200).json({ email });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Couldn't send reset token, Check your email address" });
  }
};

const resetPassword = async (req, res) => {
  const { token: resetToken } = req.params;
  const { password } = req.body;
  try {
    const token = await AuthService.resetPassword(resetToken, password);
    res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Couldn't update password, please check your inputs" });
  }
};

module.exports = {
  login,
  signup,
  changePassword,
  sendResetToken,
  resetPassword,
  createProfile,
};
