const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

//middlewares.....
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//...... app routes....
app.use("/api", require("./routes/userRoutes"));
app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/feedRoutes"));

module.exports = app;

