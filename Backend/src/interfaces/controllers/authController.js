const container = require("../../container");
const AuthService = container.authService;

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await AuthService.login(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ error: "Invalid email or password" });
  }
};

const signup = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const token = await AuthService.signup({ firstname, lastname, email, password });
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
};

module.exports = {
  login,
  signup,
};
