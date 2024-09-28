// const container = require("../../container/container");
// const UserService = container.userService;
const getUsersCountByRole = async (req, res) => {
  try {
    const UserService = req.container.resolve(
      "UserService",
      new Set(),
      req.requestScope
    );
    const userCounts = await UserService.getCount();
    res.status(200).json(userCounts);
  } catch (error) {
    res.status(500).json({ error: "Failed to get user count by role" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const UserService = req.container.resolve(
      "UserService",
      new Set(),
      req.requestScope
    );
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to get users" });
  }
};

const getAllSponsors = async (req, res) => {
  try {
    const UserService = req.container.resolve(
      "UserService",
      new Set(),
      req.requestScope
    );
    const sponsors = await UserService.getAllSponsors();
    res.status(200).json(sponsors);
  } catch (error) {
    res.status(500).json({ error: "Failed to get sponsors" });
  }
};
module.exports = {
  getUsersCountByRole,
  getAllUsers,
  getAllSponsors,
};
