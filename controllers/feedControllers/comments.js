const FeedModel = require("../../model/myFeed");
const { sendResponse } = require("../../utils/sendResponse");

exports.comments = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const skip = (page - 1) * limit;

    const result = await FeedModel.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "comments.user_id",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $project: {
          _id: 1,
          comments: {
            $filter: {
              input: "$comments",
              as: "comment",
              cond: {
                $eq: ["$$comment.user_id", "$user._id"],
              },
            },
          },
          "user.firstname": 1,
          "user.lastname": 1,
        },
      },
      {
        $sort: { "comments.createdAt": -1 },
      },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
    ]);

    sendResponse(200, "Successfully get comments", res, result);
    return;
  } catch (error) {
    console.log("----", error);
    sendResponse(500, "Failed to get comments!", res);
    return;
  }
};
