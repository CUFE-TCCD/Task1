const container = require("../../container/container");
const UserService = container.userService;
const getUsersCountByRole = async (req, res) => {
  try {
    const userCounts = await UserService.getUsersCountByRole();
    res.status(200).json(userCounts);
  } catch (error) {
    res.status(500).json({ error: "Failed to get user count by role" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to get users" });
  }
};

module.exports = {
  getUsersCountByRole,
  getAllUsers,
};
