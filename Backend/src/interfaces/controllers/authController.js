const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const AuthService = req.container.resolve('AuthService', new Set(), req.requestScope);
    const token = await AuthService.login(email, password);
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Invalid email / password" });
  }
};

const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const AuthService = req.container.resolve('AuthService', new Set(), req.requestScope);
    const token = await AuthService.signup({ firstName, lastName, email, password });
    res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to register user" });
  }
};

const changePassword = async (req, res) => {
  const { password, newPassword } = req.body;
  try {
    const AuthService = req.container.resolve('AuthService', new Set(), req.requestScope);
    const token = await AuthService.changePassword(req.user.id, password, newPassword);
    res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Couldn't update password, please check your inputs" })
  }
}

const sendResetToken = async (req, res) => {
  const { email } = req.body;
  try {
    const AuthService = req.container.resolve('AuthService', new Set(), req.requestScope);
    await AuthService.sendResetToken(email)
    res.status(200).json({ email });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Couldn't send reset token, Check your email address" })
  }
}

const resetPassword = async (req, res) => {
  const { token: resetToken } = req.params;
  const { password } = req.body;
  try {
    const AuthService = req.container.resolve('AuthService', new Set(), req.requestScope);
    const token = await AuthService.resetPassword(resetToken, password);
    res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Couldn't update password, please check your inputs" })
  }
}

module.exports = {
  login,
  signup,
  changePassword,
  sendResetToken,
  resetPassword,
};
