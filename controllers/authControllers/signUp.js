const User = require("../../model/userModel");
const { sendResponse, errorResponse } = require("../../utils/sendResponse");
const { validateSignUpInput } = require("../../utils/validationUtils");

exports.signUp = async (req, res, next) => {
  try {
    const validationErrors = validateSignUpInput(req);
    if (validationErrors.length > 0) {
      sendResponse(200, validationErrors.join(", "), res);
    }

    const { accountname } = req.body;
    const accountExist = await User.findOne({ accountname });
    if (accountExist) {
      sendResponse(200, "This account name is already taken", res);
    }

    await User.create(req.body);

    sendResponse(200, "User registered successfully", res);
  } catch (error) {
    errorResponse(error);
  }
};
