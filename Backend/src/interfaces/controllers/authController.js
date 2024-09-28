const container = require("../../container/servicesContainer");
const AuthService = container.resolve("AuthService");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { token, sponsor } = await AuthService.login(email, password);
    res.status(200).json({
      token,
      redirectedUrl:
        sponsor === true
          ? `${req.originalUrl}/sponsors`
          : `${req.originalUrl}/students`,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Invalid email / password" });
  }
};

const signup = async (req, res) => {
  const { firstName, lastName, email, password, sponsor } = req.body;
  try {
    const token = await AuthService.signup({
      firstName,
      lastName,
      email,
      password,
      sponsor,
    });

    res
      .status(201)
      .json({ token, redirectedUrl: `${req.originalUrl}/profile` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to register user" });
  }
};

const createProfile = async (req, res) => {
  const { userId, cv, picture, gradDate, linkedinProfile } = req.body;
  const profileDetails = { userId, cv, picture, gradDate, linkedinProfile };
  try {
    const newProfile = await AuthService.createProfile(profileDetails);
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
