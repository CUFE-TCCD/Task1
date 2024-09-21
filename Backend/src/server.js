require("dotenv").config();
const mongoose = require("mongoose");
const config = require("./infrastructure/config/dbConfig");
const app = require("./app");
const port = config.port;
const connectionurl = config.connectionString;
mongoose
  .connect(connectionurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Database connected successfully");

    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
