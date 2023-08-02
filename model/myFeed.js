const mongoose = require("mongoose");

const myFeedSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    caption: {
      type: String,
    },
    likes: {
      type: Array,
      // default: 0,
    },
    comments: {
      type: Array,
    },
    media: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", myFeedSchema);
