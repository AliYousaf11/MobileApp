const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    participantsID: {
      type: Array,
    },
    lastMessage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Chat", chatSchema);
