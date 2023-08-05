exports.sendResponse = (statusCode, message, res, data, token) => {
  if (data) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  } else {
    return res.status(statusCode).json({
      success: true,
      message,
    });
  }
};

exports.sendToken = (statusCode, message, res, data, token) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    token,
  });
};

// errorMiddleware.js
exports.errorResponse = (error) => {
  error.statusCode = error.statusCode || 500;
  error.message = error.message || "Internal Server Error";

  res.status(error.statusCode).json({
    success: false,
    message: error.message,
  });
};
