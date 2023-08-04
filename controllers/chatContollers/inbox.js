const User = require("../../model/userModel");
const mongoose = require("mongoose");
const { sendResponse } = require("../../utils/sendResponse");

exports.inbox = async (req, res) => {
  try {
    const Inbox = await User.aggregate([
      {
        $match: {
          $and: [
            { parentConfirmation: false },
            { _id: { $ne: new mongoose.Types.ObjectId(req.params.user_id) } },
          ],
        },
      },
      {
        $project: {
          _id: 1,
          firstname: 1,
          lastname: 1,
          profileImage: 1,
        },
      },
    ]);

    // if Inbox is empty
    if (Inbox.length === 0) {
      sendResponse(
        200,
        "I don't have any user with the parentConfirmation",
        res
      );
      return;
    }

    sendResponse(200, "Success", res, Inbox);
  } catch (error) {
    console.log(error);
    sendResponse(500, "Failed!", res);
  }
};
