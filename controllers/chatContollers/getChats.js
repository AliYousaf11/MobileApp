const Chat = require("../../model/chat");
const { sendResponse } = require("../../utils/sendResponse");

exports.getChats = async (req, res) => {
  try {
    const senderID = req.query.sender_id;
    const receiverID = req.query.receiver_id;

    const userChats = await Chat.findOne({
      participants: { $all: [senderID, receiverID] },
    });

    sendResponse(200, "Success", res, userChats.messages);
  } catch (error) {
    console.error(error);
    sendResponse(400, "Failed", res);
  }
};
