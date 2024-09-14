const express = require("express");
const mongoose = require("mongoose");
const config = require("./configuration");

const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const roomRoutes = require("./routes/roomRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const postRoutes = require("./routes/postRoutes");

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
  .then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log("Server started on port", port);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
