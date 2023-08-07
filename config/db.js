const mongoose = require("mongoose");
const colors = require("colors");

const mongoConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB connected".bgMagenta);
    return true;
  } catch (error) {
    console.error(error.message);
    console.error(error.name);
    return false;
  }
};

module.exports = mongoConnection;
