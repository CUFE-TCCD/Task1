const mongoose = require("mongoose");
const app = require("./app");
const config = require("./configuration");
require("dotenv").config();

const port = process.env.PORT || 5300;
const connectionurl = config.cloudConnectString;

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
