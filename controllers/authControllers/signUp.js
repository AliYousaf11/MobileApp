// const User = require("../../model/userModel");
// const { sendResponse } = require("../../utils/sendResponse");

// exports.signUp = async (req, res) => {
//   try {
//     const { firstname, lastname, accountname, password, DOB } = req.body;

//     //  any field is empty
//     if (!firstname || !lastname || !DOB || !accountname || !password) {
//       sendResponse(400, "All field must be filled", res);
//     }

//     // check password is proper valid
//     const passwordValidation =
//       /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     if (!passwordValidation.test(password)) {
//       sendResponse(400, "password must be proper pattern", res);
//     }

//     // Check if account name already exist in the database
//     const accountExist = await User.findOne({
//       accountname,
//     });
//     if (accountExist) {
//       sendResponse(409, "This account name is already taken", res);
//     }

//     // Parent Confirmation Details
//     if (req.body.parentConfirmation) {
//       const { guardianEmail, guardianPhone } = req.body;
//       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//       if (!guardianPhone || !guardianEmail) {
//         sendResponse(400, "Guardian Field required", res);
//       }

//       // check email valid
//       if (!emailRegex.test(guardianEmail)) {
//         sendResponse(400, "Invalid Guardian credentials", res);
//       }
//     }

//     // Create the user if email is unique and all fields are valid
//     const user = await User.create(req.body);
//     user.save();
//     sendResponse(200, "User registered successfully", res);
//   } catch (error) {
//     sendResponse(500, "Invalid response", res);
//   }
// };

// ---------------------------
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
