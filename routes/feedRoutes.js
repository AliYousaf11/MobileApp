const express = require("express");
const router = express.Router();

// Controller's
const { feedPage, myFeed } = require("./myRoutes");

// Routes...

router.get("/sideHustle/feedPage", feedPage);
router.post("/post/myFeed", myFeed);
module.exports = router;
