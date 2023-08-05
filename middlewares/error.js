const ErrorHandler = require("../utils/ErrorHandler");

// middleware function
module.exports = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.message = error.message || "Internel Server Error";

  // cast error...
  if (error.name === "CastError") {
    const message = `Resource not found. Invalid ${error.path}`;
    error = new ErrorHandler(message, 400);
  }

  // Json web token error...
  if (error.code === "JsonWebTokenError") {
    const message = `Json web token is invalid. Please try again.`;
    error.message = message; // Modify the error message directly
    error.statusCode = 400; // Update status code if needed
  }

  // json token expired ...
  if (error.code === "TokenExpiredError") {
    const message = `Json web token is expired. Please try again.`;
    error.message = message; // Modify the error message directly
    error.statusCode = 400; // Update status code if needed
  }

  res.status(error.statusCode).json({
    success: false,
    message: error.message,
  });
};
