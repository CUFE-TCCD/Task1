require('dotenv').config();

const cloudConnectString = process.env.MONGODB_URI;

if (!cloudConnectString) {
  console.error('MongoDB connection string is not defined in .env');
}

module.exports = {
  cloudConnectString,
};
