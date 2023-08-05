const Chat = require("../../model/chat");
const { sendResponse } = require("../../utils/sendResponse");
// const { pagination } = require("../../utils/pagination");

exports.getChats = async (req, res) => {
  try {
    const senderID = req.query.sender_id;
    const receiverID = req.query.receiver_id;

    // const { page, limit, skip } = pagination(req);
    // console.log(page, limit, skip);

    // const page = parseInt(req.query.page) || 1;
    // const limit = parseInt(req.query.limit) || 3;
    // const startIndex = (page)

    const userChats = await Chat.findOne({
      participants: { $all: [senderID, receiverID] },
    });

    // getChats in pagination form
    // const messages = await userChats.messages.slice();
    sendResponse(200, "Success", res, userChats.messages);
  } catch (error) {
    console.error(error);
    sendResponse(400, "Failed", res);
  }
};
