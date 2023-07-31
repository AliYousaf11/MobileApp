const app = require("./app");
const dotenv = require("dotenv");
const mongoConnection = require("./config/db");
const colors = require("colors");

dotenv.config();
mongoConnection();

app.listen(process.env.PORT, () => {
  console.log(`server start http://localhost:${process.env.PORT}`.bgYellow);
});
