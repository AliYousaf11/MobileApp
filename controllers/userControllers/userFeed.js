const { Feed } = require("../../model");
const { sendResponse, pagination } = require("../../utils/sendResponse");
const { CatchAsync } = require("../../middlewares/CatchAsyncError");

exports.userFeed = CatchAsync(async (req, res) => {
  try {
    const { page, limit, skip } = pagination(req);

    const userPost = await Feed.find({ userID: req.params.userID })
      .skip(skip)
      .limit(limit);

    sendResponse(200, "Successfully get all posts", res, userPost);
  } catch (error) {
    sendResponse(500, "Failed to get all posts!", res);
    return;
  }
});
