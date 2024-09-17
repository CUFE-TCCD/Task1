const User = require("../domain/models/UserSchema");

exports.createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};
