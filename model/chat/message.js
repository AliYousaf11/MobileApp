const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    ChatID: {
      type: String,
    },
    senderID: {
      type: String,
    },
    centent: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", MessageSchema);
