const jwt = require("jsonwebtoken");

exports.isAuth = (req, res, next) => {
  try {
    // get the token from the Header...
    const token = req.headers["authorization"].split(" ")[1];

    // verify after getting the token from the headers......
    jwt.verify(token, process.env.SecrectKey, (error, decoded) => {
      if (error) {
        return res.status(401).json({
          message: "auth is inValid!",
          success: false,
        });
      } else {
        // set the auth id & added into the incomming request....
        req.body.userID = decoded.id;
        next();
      }
    });
  } catch (error) {
    return res.status(401).json({
      message: error,
      success: false,
    });
  }
};
