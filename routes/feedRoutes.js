const express = require("express");
const router = express.Router();

// Controller's
const { jobs, createfeed, feed } = require("../controllers");
const upload = require("../utils/Upload");

// Routes...
router.get("/jobs", jobs);
router.post("/createFeed", upload.array("file"), createfeed);
router.get("/feeds", feed);
module.exports = router;
