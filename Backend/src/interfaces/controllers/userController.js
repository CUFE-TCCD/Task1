// const container = require("../../container/container");
// const UserService = container.userService;
const getUsersCountByRole = async (req, res) => {
  try {
    const UserService = req.container.resolve('UserService', new Set(), req.requestScope);
    const userCounts = await UserService.getCount();
    res.status(200).json(userCounts);
  } catch (error) {
    res.status(500).json({ error: "Failed to get user count by role" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const UserService = req.container.resolve('UserService', new Set(), req.requestScope);
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to get users" });
  }
};

const getUser = async (req, res) => {
  const UserService = req.container.resolve('UserService', new Set(), req.requestScope);
  const UserProfileService = req.container.resolve('UserProfileService', new Set(), req.requestScope);

  const { id } = req.params;
  try {
    const user = await UserService.getUserInfo(id);
    if(!user)
    {
      res.status(404).json({ error: "User not found" });
      return;
    }
    const profilePicture = await UserProfileService.getUserPic(id);
    res.status(200).json({
      firstname: user.firstName,
      lastname: user.lastName, 
      email: user.email, 
      role: user.role, 
      profilepicture: profilePicture? profilePicture.picture: null
    });
  }
  catch (error) {
    res.status(500).json({ error: `Failed to get user` });
  }
}

module.exports = {
  getUsersCountByRole,
  getAllUsers,
  getUser,
};
