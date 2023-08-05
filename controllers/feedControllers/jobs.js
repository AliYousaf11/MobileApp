const sideHustle = require("../../model/feedPage");
const { sendResponse } = require("../../utils/sendResponse");
const { pagination } = require("../../utils/pagination");

// const sideHustle = require("../../model/feedPage");
// const { sendResponse } = require("../../utils/sendResponse");

// exports.feedPage = async (req, res) => {
//   try {
//     const sideHustle_Jobs = await sideHustle.create(req.body);
//     sendResponse(200, "All jobs posted", res);
//   } catch (error) {
//     sendResponse(200, "failed sideHustle Jobs", res);
//   }
// };

exports.jobs = async (req, res) => {
  try {
    const { page, limit, skip } = pagination(req);
    // const page = parseInt(req.query.page) || 1;
    // const limit = parseInt(req.query.limit) || 2;
    // const skip = (page - 1) * limit;

    const sideHustle_Jobs = await sideHustle.find().skip(skip).limit(limit);
    sendResponse(200, "All sideHustle Jobs", res, sideHustle_Jobs);
  } catch (error) {
    sendResponse(200, "failed sideHustle Jobs", res);
  }
};
