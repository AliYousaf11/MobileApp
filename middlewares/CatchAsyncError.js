module.exports = (funAsAProp) => async (req, res, next) => {
  try {
    await funAsAProp(req, res, next);
  } catch (error) {
    next(error);
  }
};
