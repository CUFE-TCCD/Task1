const mongoose = require("mongoose");
const app = require("./app");
const config = require("./configuration");
require("dotenv").config();

const User = require("./models/UserSchema");
const Event = require("./models/EventSchema");
const Room = require("./models/RoomSchema");
const Application = require("./models/ApplicationSchema");
const Post = require("./models/PostSchema");

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
