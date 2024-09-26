require("dotenv").config();
const mongoose = require("mongoose");
const config = require("./infrastructure/config/dbConfig");
const app = require("./app");
const eventSeed = require('./infrastructure/database/mongoose/seeds/eventSeed');
const feedbackSeed = require('./infrastructure/database/mongoose/seeds/feedbackSeed');
const port = config.port;
const connectionurl = config.connectionString;
mongoose
  .connect(connectionurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async (con) => {
    console.log("Database connected successfully");
    //console.log(con.connections);
    await eventSeed();
    await feedbackSeed();
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
