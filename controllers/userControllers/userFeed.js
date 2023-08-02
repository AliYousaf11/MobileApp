//     const userPost = await PostModel.aggregate([
//       {
//         $match: { userID: req.params.userID },
//       },
//       {
//         $project: {
//           caption: 1,
//           likes: 1,
//           comments: 1,
//           media: 1,
//           createdAt: 1,
//         },
//       },
//     ]);

const PostModel = require("../../model/myFeed");
const { sendResponse } = require("../../utils/sendResponse");

exports.userFeed = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const skip = (page - 1) * limit;

    const userPost = await PostModel.find({ userID: req.params.userID })
      .skip(skip)
      .limit(limit);

    sendResponse(200, "Successfully get all posts", res, userPost);
  } catch (error) {
    sendResponse(500, "Failed to get all posts!", res);
    return;
  }
};
