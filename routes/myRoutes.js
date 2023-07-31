const { signIn } = require("../controllers/authControllers/signIn");
const { signUp } = require("../controllers/authControllers/signUp");
const { feedPage } = require("../controllers/feedControllers/feedPage");
const { myFeed } = require("../controllers/feedControllers/myFeed");
const {
  updateProfile,
} = require("../controllers/userControllers/updateProfile");
const {
  getUser,
} = require("../controllers/userControllers/getUser_Controller");

module.exports = {
  signUp,
  signIn,
  feedPage,
  myFeed,
  updateProfile,
  getUser,
};
