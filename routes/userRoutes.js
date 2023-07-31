const express = require("express");
const router = express.Router();
const multer = require("multer");

const { updateProfile, getUser } = require("./myRoutes");
const upload = require("../utils/Upload");

router.put("/updateProfile", upload.single("profilePic"), updateProfile);
router.get("/userDetails/:accountName", getUser);
module.exports = router;
