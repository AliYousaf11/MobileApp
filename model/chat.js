const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    senderID: {
      type: String,
    },
    receiverID: {
      type: String,
    },
    content: {
      type: String,
    },
    seen: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const chatSchema = new mongoose.Schema(
  {
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    messages: [MessageSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Chat", chatSchema);
