const mongoose = require("mongoose");
const colors = require("colors");

const mongoConnection = async () => {
  try {
    const checkConnection = await mongoose.connect(process.env.DB_URL);
    if (checkConnection) {
      console.log("mongodb connected".bgMagenta);
    } else {
      console.log("mongodb not connected ".bgGreen);
    }
  } catch (error) {
    console.log(error.message);
    console.log(error.name);
  }
};

module.exports = mongoConnection;
