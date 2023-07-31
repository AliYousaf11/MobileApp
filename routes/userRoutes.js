const express = require("express");
const router = express.Router();
const multer = require("multer");

const { updateProfile, getUser } = require("./myRoutes");

const { multerOptions } = require("../utils/cloudinary");
const upload = multer(multerOptions);

router.put("/updateProfile", upload.single("profilePic"), updateProfile);
router.get("/userDetails/:accountName", getUser);
module.exports = router;
