const User = require("../../model/userModel");
const { sendResponse } = require("../../utils/sendResponse");
const { validateSignUpInput } = require("../../utils/validationUtils");

exports.signUp = async (req, res) => {
  try {
    const validationErrors = validateSignUpInput(req);
    if (validationErrors.length > 0) {
      sendResponse(400, validationErrors.join(", "), res);
      return;
    }

    // Check if account name already exists in the database
    const { accountname } = req.body;
    const accountExist = await User.findOne({ accountname });
    if (accountExist) {
      sendResponse(409, "This account name is already taken", res);
      return;
    }

    // Create the user if all fields are valid and account name is unique
    const user = await User.create(req.body);
    user.save();
    sendResponse(200, "User registered successfully", res);
  } catch (error) {
    sendResponse(500, "Invalid response", res);
  }
};
