const { signIn } = require("./authControllers/signIn");
const { signUp } = require("./authControllers/signUp");
const { jobs } = require("./feedControllers/jobs");
const { createfeed } = require("./feedControllers/createfeed");
const { updateUser } = require("./userControllers/updateUser");
const { getUser } = require("./userControllers/getUser");
const { feed } = require("./feedControllers/feed");
const { likes } = require("../controllers/feedControllers/likes");

module.exports = {
  signUp,
  signIn,
  jobs,
  createfeed,
  updateUser,
  getUser,
  feed,
  likes,
};
