const FeedModel = require("../../model/myFeed");
const UserModel = require("../../model/userModel");

const { sendResponse } = require("../../utils/sendResponse");

exports.feed = async (req, res) => {
  try {
    // sendResponse(200, "Successfully", res);
    // Your query pipeline
    const result = await FeedModel.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "userID",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $project: {
          caption: 1,
          media: 1,
          createdAt: 1,
          "user.firstname": 1,
          "user.lastname": 1,
          "user.profileImage": 1,
        },
      },
    ]);
    // const user = await MyFeedModel.find({});

    sendResponse(200, "Successfully get myfeeds", res, result);
    return;
  } catch (error) {
    console.log("----", error);
    sendResponse(500, "Failed Get Myfeed!", res);
    return;
  }
};
