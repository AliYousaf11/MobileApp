const sideHustle = require("../../model/feedPage");
const { sendResponse } = require("../../utils/sendResponse");

exports.feedPage = async (req, res) => {
  try {
    const sideHustle_Jobs = await sideHustle.find();
    sendResponse(200, "All sideHustle Jobs", res, sideHustle_Jobs);
  } catch (error) {
    sendResponse(200, "failed sideHustle Jobs", res);
  }
};
