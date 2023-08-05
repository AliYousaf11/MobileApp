const { Chat } = require("../../model");
const { sendResponse } = require("../../utils");
const { CatchAsync } = require("../../middlewares/CatchAsyncError");

exports.getChats = CatchAsync(async (req, res) => {
  const senderID = req.query.sender_id;
  const receiverID = req.query.receiver_id;

  const userChats = await Chat.findOne({
    participants: { $all: [senderID, receiverID] },
  });
  sendResponse(200, "Success", res, userChats.messages);
});
