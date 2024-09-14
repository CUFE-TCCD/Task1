const express = require("express");
const mongoose = require("mongoose");
const config = require("./configuration");
const app = express();
const port = 5300;
const connectionurl = config.cloudConnectString;

app.use(express.json());

app.use("/api", taskRoutes);

mongoose
  .connect(connectionurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log("Server started on port", port);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
