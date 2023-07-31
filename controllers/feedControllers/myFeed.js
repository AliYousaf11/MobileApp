const Post = require("../../model/myFeed");
const { sendResponse } = require("../../utils/sendResponse");

exports.myFeed = async (req, res) => {
  try {
    const userPost = await Post(req.body);
    await userPost.save();
    sendResponse(200, "Successfully Post", res);
  } catch (error) {
    sendResponse(500, "Post Failed !", res);
  }
};
