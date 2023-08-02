const express = require("express");
const router = express.Router();

// Controller's
const { jobs, createfeed, feed, likes } = require("../controllers");
const upload = require("../utils/Upload");

// Routes...
router.get("/jobs", jobs);
router.post("/createFeed", upload.array("file"), createfeed);
router.get("/feeds", feed);
router.put("/likes", likes);

module.exports = router;
