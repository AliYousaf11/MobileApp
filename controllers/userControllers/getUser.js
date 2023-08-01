const User = require("../../model/userModel");
const { sendResponse } = require("../../utils/sendResponse");

exports.getUser = async (req, res) => {
  try {
    const accountname = req.params.accountName;
    const userDetails = await User.findOne({ accountname });

    // check the user account
    if (!userDetails) {
      sendResponse(404, "Account Nont Found", res);
    } else {
      // password is set to null before it sending to client side.
      userDetails.password = null;
      sendResponse(200, "user successfully send", res, userDetails);
    }
  } catch (error) {
    sendResponse(500, "Get user Failed", res);
  }
};
