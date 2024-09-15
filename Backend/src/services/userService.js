const userRepository = require('../repositories/userRepository');

exports.createUser = async (userData) => {
  const user = await userRepository.createUser(userData);
  return user;
};
