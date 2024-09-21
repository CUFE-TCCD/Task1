const connectionString = process.env.MONGODB_URI;
const port = process.env.MONGODB_PORT;
if (!connectionString) {
  console.error('MongoDB connection string is not defined in .env');
}

module.exports = {
  connectionString,
  port,
};
