const express = require("express");
const router = express.Router();

// Controller's
const { feedPage, myFeed } = require("./myRoutes");
const upload = require("../utils/Upload");

// Routes...
router.get("/sideHustle/feedPage", feedPage);
// router.post("/sideHustle/feedPage", feedPage);
router.post("/post/myFeed", upload.array("posts"), myFeed);
module.exports = router;
