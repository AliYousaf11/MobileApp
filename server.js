const app = require("./app");
const dotenv = require("dotenv");
const mongoConnection = require("./config/db");
const colors = require("colors");

dotenv.config();

// if DB connect then server will start.
(async () => {
  const isConnected = await mongoConnection();

  if (isConnected) {
    app.use('/', (req,res)=>{
      res.send("Hello");
    });
    app.listen(process.env.PORT || 4000, () => {
      console.log(
        `Server started at http://localhost:${process.env.PORT}`.bgYellow
      );
    });
  } else {
    console.error("Database connection failed. Server not started.".bgRed);
  }
})();
