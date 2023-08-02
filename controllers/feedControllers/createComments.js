const { sendResponse } = require("../../utils/sendResponse");
const PostModel = require("../../model/myFeed");

exports.createComments = async (req, res) => {
  try {
    const { user_id, post_id, comments } = req.body;
    console.log(req.body);

    if (!comments) {
      sendResponse(409, "Comment is empty", res);
    }

    const post = await PostModel.findById(post_id);
    if (!post) {
      sendResponse(404, "Post not found", res);
      return;
    }
    post.comments.push({ user_id, comments });
    await post.save();
    sendResponse(200, "successfully", res, post);
  } catch (error) {
    sendResponse(500, "Failed comment's", res);
  }
};
