const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config({ path: "./data.env" });
const config = require("./infrastructure/config/dbConfig");
console.log("MONGODB_URI:", process.env.MONGODB_URI);

const port = process.env.PORT || 5300;
//const connectionurl = config.cloudConnectString;
const connectionurl =
  "mongodb+srv://farouqdiaaeldin:TCCDDB@tccd.4jp7a.mongodb.net/?retryWrites=true&w=majority&appName=TCCD";
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
