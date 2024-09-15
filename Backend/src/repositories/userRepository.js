const User = require('../models/UserSchema');

exports.createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};
