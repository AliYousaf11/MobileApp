const FeedModel = require("../../model/myFeed");
const UserModel = require("../../model/userModel");
const { sendResponse } = require("../../utils/sendResponse");

exports.feed = async (req, res) => {
  try {
    //
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;

    const skip = (page - 1) * limit;

    // Your query pipeline with pagination
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
      { $sort: { createdAt: -1 } },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
    ]);

    sendResponse(200, "Successfully get myfeeds", res, result);
    return;
  } catch (error) {
    console.log("----", error);
    sendResponse(500, "Failed Get Myfeed!", res);
    return;
  }
};
