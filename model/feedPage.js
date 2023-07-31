const mongoose = require("mongoose");

const feedPageSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  location: {
    type: String,
  },
});

module.exports = mongoose.model("sideHustleJobs", feedPageSchema);
