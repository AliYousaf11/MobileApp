const PrivateChat = require("../../model/chat");
const User = require("../../model/userModel");
const { pushMessage } = require("../../utils/pusher");
const { sendResponse } = require("../../utils/sendResponse");

exports.sendMessage = async (req, res) => {
  try {
    const { senderID } = req.body;
    const { receiverID } = req.body;
    const content = req.body.content;

    const sender = await User.findById(senderID);
    const receiver = await User.findById(receiverID);

    if (!content) {
      return sendResponse(404, "message is empty", res);
    }

    if (!sender || !receiver) {
      return sendResponse(404, "User not found", res);
    }

    const message = {
      senderID: senderID,
      receiverID: receiverID,
      content,
    };

    // chat already exit of participants
    let privateChat = await PrivateChat.findOne({
      participants: {
        $all: [senderID, receiverID],
      },
    });

    // set new chat of participants
    if (!privateChat) {
      privateChat = new PrivateChat({
        participants: [senderID, receiverID],
      });
    }

    privateChat.messages.push(message);
    await privateChat.save();
    console.log(message);
    pushMessage(message, receiverID);
    sendResponse(200, "Success!", res);
  } catch (error) {
    sendResponse(500, "Failed!", res);
  }
};
