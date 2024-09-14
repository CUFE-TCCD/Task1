const express = require("express");
const mongoose = require("mongoose");
const config = require("./configuration");

const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const roomRoutes = require("./routes/roomRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const postRoutes = require("./routes/postRoutes");

const User = require("./models/UserSchema");
const Event = require("./models/EventSchema");
const Room = require("./models/RoomSchema");
const Application = require("./models/ApplicationSchema");
const Post = require("./models/PostSchema");

const app = express();
const port = 5300;
const connectionurl = config.cloudConnectString;

app.use(express.json());

app.use("/api/v1", userRoutes);
app.use("/api/v1", eventRoutes);
app.use("/api/v1", roomRoutes);
app.use("/api/v1", applicationRoutes);
app.use("/api/v1", postRoutes);

mongoose
  .connect(connectionurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Database connected successfully");
    try {
      await User.createCollection();
      console.log("User collection created");

      await Event.createCollection();
      console.log("Event collection created");

      await Room.createCollection();
      console.log("Room collection created");

      await Application.createCollection();
      console.log("Application collection created");

      await Post.createCollection();
      console.log("Post collection created");
    } catch (err) {
      console.error("Error creating collections:", err);
    }
    app.listen(port, () => {
      console.log("Server started on port", port);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
