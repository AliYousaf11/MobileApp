const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
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

const Job = mongoose.model("job", jobSchema);
module.exports = { Job };
