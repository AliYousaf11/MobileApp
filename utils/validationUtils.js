// validationUtils.js

// Validate user input for signup
function validateSignUpInput(req) {
  const { firstname, lastname, accountname, password, DOB } = req.body;
  const errors = [];

  if (!firstname || !lastname || !DOB || !accountname || !password) {
    errors.push("All fields must be filled");
  }

  const passwordValidation =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordValidation.test(password)) {
    errors.push("Password must be in a proper pattern");
  }

  if (req.body.parentConfirmation === true) {
    const { guardianEmail, guardianPhone } = req.body;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!guardianPhone || !guardianEmail) {
      errors.push("Guardian fields are required");
    }

    // check email valid
    if (!emailRegex.test(guardianEmail)) {
      errors.push("Invalid Guardian credentials");
    }
  }

  return errors;
}

module.exports = {
  validateSignUpInput,
};
