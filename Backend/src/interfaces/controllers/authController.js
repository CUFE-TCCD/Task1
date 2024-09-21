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

module.exports = {
  login,
  signup,
};
