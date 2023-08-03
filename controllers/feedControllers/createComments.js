const { sendResponse } = require("../../utils/sendResponse");
const PostModel = require("../../model/myFeed");

exports.createComments = async (req, res) => {
  try {
    const { user_id, post_id, comments } = req.body;

    if (!comments) {
      sendResponse(409, "Comment is empty", res);
      return;
    }

    const post = await PostModel.findById(post_id);
    if (!post) {
      sendResponse(404, "Post not found", res);
      return;
    }

    // Create a new comment object with user_id and comments
    const newComment = { user_id, comments };
    post.comments.push(newComment);

    await post.save();
    sendResponse(200, "Comment added successfully", res, post);
  } catch (error) {
    sendResponse(500, "Failed to add comment", res);
  }
};
