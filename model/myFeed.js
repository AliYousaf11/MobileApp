const mongoose = require("mongoose");

const myFeedSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  userName: {
    type: String,
  },
  userPicture: {
    type: String,
  },
  PostTime: {
    type: String,
  },
  media: {
    type: String,
  },
  likes: {
    type: Number,
  },
  comments: {
    type: Array,
  },
  usersLikePost: {
    type: Array,
  },
});

module.exports = mongoose.model("Post", myFeedSchema);
