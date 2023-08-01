const express = require("express");
const router = express.Router();
// const multer = require("multer");

const { updateUser, getUser } = require("../controllers");
const upload = require("../utils/Upload");

router.put("/userUpdate", upload.single("profilePic"), updateUser);
router.get("/userDetails/:accountName", getUser);
module.exports = router;

